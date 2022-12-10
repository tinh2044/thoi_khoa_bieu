import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorLessonsUser } from '../../redux/selector';
import { selectorUser } from '../../redux/selector';
import FormEdit from '../FormEdit';
import Teacher from '../Teacher';
import CalendarLesson from '../CalendarLesson';

function Account() {
    const user = useSelector(selectorUser);
    const lessonRegister = useSelector(selectorLessonsUser);
    // Xử lý hiện thị menu chọn màu
    const [showMenuEdit, setShowMenuEdit] = useState(false);
    // Xử lý hiện thị danh sách tiết đã đăng kí
    const [showListLesson, setShowListLesson] = useState(false);

    return (
        <Grid item sx={12} md={3.5}>
            <Typography>Tài Khoản</Typography>
            <Box bgcolor="lightblue" width="100%">
                {/* Hiện thị tài khoản đang đăng nhập */}
                <Teacher name={user.name} color={user.color} course={user.course} gender={user.gender} />
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Link to="/">
                    <Button variant="contained" color="error" underline="none">
                        Đăng xuất
                    </Button>
                </Link>
                <Button
                    variant="contained"
                    color="success"
                    underline="none"
                    onClick={() => setShowListLesson(!showListLesson)}
                >
                    Xem lịch
                </Button>
                <Button
                    variant="contained"
                    color="info"
                    underline="none"
                    onClick={() => setShowMenuEdit(!showMenuEdit)}
                >
                    Chỉnh sửa
                </Button>
            </Box>
            {/* Nơi chỉnh sửa thông tin */}
            {showMenuEdit && <FormEdit user={user} handleHideForm={setShowMenuEdit} />}

            {/* Xem lịch đã đăng kí */}
            {showListLesson && <CalendarLesson lessonRegister={lessonRegister} />}
        </Grid>
    );
}

export default Account;
