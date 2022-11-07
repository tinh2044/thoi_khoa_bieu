import React from 'react';
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectorListTeacher } from '../../redux/selector';
import Account from '../../components/Account';
import Schedule from '../../components/Schedule';
import Teacher from '../../components/Teacher';

function DashboardPage() {
    const listTeacher = useSelector(selectorListTeacher);
    return (
        <Box width="100%" display="flex" flexDirection="column">
            <Grid pt={1} container display="flex" flexWrap="wrap" justifyContent="space-around">
                {/*Hiện thị Danh sách giáo viên đã đăng kí */}
                {listTeacher.map((data) => (
                    <Grid key={data.color} item xs={12} sm={5.8} md={2.8}>
                        <Teacher name={data.name} color={data.color} course={data.course} gender={data.gender} />
                    </Grid>
                ))}
            </Grid>
            <Grid
                pl={1}
                pb={1}
                width="100%"
                container
                spacing={1}
                display="flex"
                flexWrap="wrap"
                justifyContent="space-around"
            >
                {/* Thời khóa biểu */}
                <Schedule />
                {/* Tài khoản đang đăng nhập */}
                <Account />
            </Grid>
        </Box>
    );
}

export default DashboardPage;
