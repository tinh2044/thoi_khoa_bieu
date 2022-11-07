import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { selectorNameTeachers } from '../../redux/selector';
import { actionsTeacher } from '../Teacher/TeacherSlice';
import { listCourse } from '../../data';
import SelectValue from '../../features/SelectValue';
import ChooseColor from '../../features/ChooseColor';
import { actionsUser } from '../Account/AccountSlice';
const defaultValues = {
    name: '',
    gender: '',
    color: '',
    course: '',
};
function FormRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(defaultValues);
    const nameTeachers = useSelector(selectorNameTeachers);
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        // Cập nhập giá trị của từng phần trong form khi người dùng nhập
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    // Xử lý đăng ký
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lấy từng giá trị form
        const { name, gender, course } = formValues;
        let validateForm = true;
        // Kiểm tra người dùng có nhập tên hay không
        if (!name) {
            toast.error('Vui lòng nhập tên');
            validateForm = false;
        }
        // Kiểm tra người dùng có chọn giới tính hay không

        if (!gender) {
            toast.error('Vui lòng chọn giới tính');
            validateForm = false;
        }
        // Kiểm tra người dùng có chọn giới môn học hay không

        if (!course) {
            toast.error('Vui lòng chọn môn học');
            validateForm = false;
        }
        // Kiểm tra người dùng có trùng với những giáo viên đã đăng kí hay không
        if (nameTeachers.includes(formValues.name)) {
            toast.error('Tên này đã tồn tại vui lòng nhập tên khác');
            validateForm = false;
        }
        // Nếu không có lỗi thì đăng ký thàng công
        if (validateForm) {
            navigate('/dashboard');
            // gửi actions lên redux để thêm một giáo viên mới
            dispatch(actionsTeacher.addTeacher(formValues));
            // Gửi actions lên redux để thay đổi tài khoản đang đăng nhập

            dispatch(actionsUser.change(formValues));
        }
    };
    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <Box alignItems="center" justifyContent="center" flexDirection="column" width="100%">
                <Box backgroundColor="#fff" borderRadius="4px" width="100%" mb={2}>
                    <TextField
                        fullWidth
                        id="name-input"
                        name="name"
                        label="Họ và tên, VD: Nguyễn Chí Tình"
                        type="text"
                        value={formValues.name}
                        onChange={handleChangeForm}
                    />
                </Box>
                {/* Ô chọn giới tính */}
                <SelectValue
                    handleOnChange={handleChangeForm}
                    data={['Nam', 'Nữ', 'Khác']}
                    label="Giới tính"
                    name="gender"
                />
                {/* Ô chọn môn học */}
                <SelectValue handleOnChange={handleChangeForm} data={listCourse.sort()} label="Môn học" name="course" />

                {/* Nơi chọn màu cho mình */}
                <ChooseColor handleOnChange={handleChangeForm} />

                <Button fullWidth variant="contained" type="submit" color="primary">
                    Đăng kí
                </Button>

                <Typography variant="p" color="#fdd428" component="p" py={1}>
                    Bạn đã có tài khoản
                </Typography>

                <Link to="/">
                    <Button fullWidth variant="contained" type="button" color="primary">
                        Đăng nhập
                    </Button>
                </Link>
            </Box>
        </form>
    );
}

export default FormRegister;
