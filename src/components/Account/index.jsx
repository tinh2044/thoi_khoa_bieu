import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectorUser } from '../../redux/selector';
import FormEdit from '../FormEdit';
import Teacher from '../Teacher';

function Account() {
    const user = useSelector(selectorUser);
    // Xữ lý hiện thị menu chọn màu
    const [showMenuEdit, setShowMenuEdit] = useState(false);

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
                    color="info"
                    underline="none"
                    onClick={() => setShowMenuEdit(!showMenuEdit)}
                >
                    Chỉnh sửa
                </Button>
            </Box>
            {/* Nơi chỉnh sửa thông tin */}
            {showMenuEdit && <FormEdit user={user} handleHideForm={setShowMenuEdit} />}
        </Grid>
    );
}

export default Account;