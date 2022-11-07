import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { selectorListTeacher, selectorNameTeachers } from '../../redux/selector';
import { actionsUser } from '../Account/AccountSlice';

function FormLogin() {
    const [inputValue, setInputValue] = useState('');
    // điều hướng trang
    const navigate = useNavigate();
    // Lấy tất cả tên của giáo viên đã đăng ký
    const nameTeachers = useSelector(selectorNameTeachers);
    // Lấy tất cả thông tin của giáo viên đã đăng ký
    const listTeacher = useSelector(selectorListTeacher);
    const dispatch = useDispatch();
    // Xử lý khi người dùng bấm đăng nhập
    const handleLogin = (e) => {
        e.stopPropagation();
        // Kiểm tra người dùng có nhập đúng tên đã đăng kí hay không
        if (nameTeachers.includes(inputValue)) {
            toast.info('Bạn đã nhập thành công');
            const user = listTeacher.find((teacher) => teacher.name === inputValue);
            // Gửi actions lên redux để thay đổi tài khoản đang đăng nhập
            dispatch(actionsUser.change(user));
            // Chuyển đến trang thời khóa biểu
            navigate('/dashboard');
        } else {
            // thông báo lỗi khi người dùng nhập sai tên đã đăng kí
            toast.error('Tên đăng nhập không đúng vui lòng kiểm tra lại hoặc đăng ký', { autoClose: 3000 });
        }
    };

    return (
        <Box mb={2} width="90%">
            <Box backgroundColor="#fff" borderRadius="4px" width="100%" mb={2}>
                {/* Ô nhập tên  */}
                <TextField
                    fullWidth
                    id="name-input"
                    name="name"
                    label="Name"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    color="success"
                />
            </Box>

            <Button
                onClick={handleLogin}
                sx={{
                    transition: 'all 0.4s linear',
                    color: '#fff',
                    background: 'linear-gradient( to right, #005bea, #00c6fb)',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    '&:hover': { background: '#00C851' },
                }}
                variant="contained"
                type="button"
            >
                Đăng nhập
            </Button>
        </Box>
    );
}

export default FormLogin;
