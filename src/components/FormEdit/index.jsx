import React, { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { selectorColors, selectorNameTeachers } from '../../redux/selector';
import { actionsSchedule } from '../Schedule/ScheduleSlice';
import { actionsTeacher } from '../Teacher/TeacherSlice';
import SelectValue from '../../features/SelectValue';
import ChooseColor from '../../features/ChooseColor';
import { listCourse } from '../../data';
import { actionsUser } from '../Account/AccountSlice';
function FormEdit({ user }) {
    const dispatch = useDispatch();
    const nameTeachers = useSelector(selectorNameTeachers);
    const listColor = useSelector(selectorColors);
    // nơi chưa dữ liệu khi chọn và đăng nhập
    const [formValues, setFormValues] = useState({
        name: user.name,
        gender: user.gender,
        color: user.color,
        course: user.course,
    });
    // Xử lý cập nhật dữ liệu
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    // Xử lý gửi thông tin chỉnh sửa
    const handleSubmit = (e) => {
        // Ngăn chặn hành vi mặc định của form
        e.preventDefault();
        // Kiểm tra các dữ liệu có khác lúc chưa thay đổi hay không
        const checkColor = formValues.color !== user.color;
        const checkGender = formValues.gender !== user.gender;
        const checkCourse = formValues.course !== user.course;
        const checkName = formValues.name !== user.name;
        // Kiểm tra tên hoặc màu có trùng với các giáo viên đã đăng kí hay không
        if (
            (nameTeachers.includes(formValues.name) && checkName) ||
            (listColor.includes(formValues.color) && checkColor)
        ) {
            // Nếu màu trùng thì thông báo
            if (listColor.includes(formValues.color) && checkColor) {
                toast.error('Màu này đã có người chọn vui lòng chọn màu khác');
            } else {
                // Ngược lại tên trùng thì thông báo
                toast.error('Tên này đã có người chọn vui lòng chọn tên khác');
            }
        } else {
            // Nếu có thay đổi thì thông báo
            if (checkName) {
                toast.success(`Bạn đã thay đổi tên thành ${formValues.name}`);
            }
            if (checkGender) {
                toast.success(`Bạn đã thay đổi giới tính thành ${formValues.gender}`);
            }
            if (checkCourse) {
                toast.success(`Bạn đã thay đổi môn thành ${formValues.course}`);
            }
            if (checkColor) {
                toast.success(`Bạn đã thay đổi màu sắc `);
            }
            dispatch(actionsUser.change(formValues));
            dispatch(actionsTeacher.editTeacher({ checkName: user.name, data: formValues }));
            dispatch(actionsSchedule.changeData({ checkName: user.name, data: formValues }));
        }
    };
    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <Box alignItems="center" justifyContent="center" flexDirection="column" width="100%">
                <Box backgroundColor="#fff" borderRadius="4px" width="100%" mb={2}>
                    {/* Nơi điền thay đổi tên */}
                    <TextField
                        fullWidth
                        id="name-input"
                        name="name"
                        label="Name"
                        type="text"
                        value={formValues.name}
                        onChange={handleChangeForm}
                    />
                </Box>
                {/* Nơi điền thay đổi giới tính */}

                <SelectValue
                    handleOnChange={handleChangeForm}
                    data={['Nam', 'Nữ', 'Khác']}
                    label="Giới tính"
                    name="gender"
                    defaultValue={user.gender}
                />
                {/* Nơi điền thay đổi môn học */}

                <SelectValue
                    handleOnChange={handleChangeForm}
                    data={listCourse.sort()}
                    label="Môn học"
                    name="course"
                    defaultValue={user.course}
                />
                {/* Nơi điền thay đổi màu */}
                <ChooseColor handleOnChange={handleChangeForm} defaultColor={user.color} />
                {/* nút gửi thay đổi */}
                <Button fullWidth variant="contained" type="submit" color="primary">
                    Thay đổi
                </Button>
            </Box>
        </form>
    );
}

export default FormEdit;
