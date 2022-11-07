import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectorListRoom } from '../../redux/selector';
import { listDay, listLesson, listTime } from '../../data';
import ButtonPagination from '../ButtonPagination';
import CourseOfDay from '../CourseOfDay';

function Schedule() {
    // Lấy danh sách các phòng
    const listRoom = useSelector(selectorListRoom);
    // hiện thị và cập nhập phòng hiện tại
    const [room, setRoom] = useState(listRoom[0]);
    return (
        <Grid item sx={12} md={8} flexDirection="column" display="flex">
            {/* Các nút chuyển phòng */}
            <ButtonPagination setRoom={setRoom} />
            <Grid container columns={20} spacing={0} display="flex" mt={1}>
                <Grid item xs={2} display="flex" flexDirection="column">
                    {/* Hiện thị các tiết học */}
                    {listLesson.map((item) => (
                        <Box
                            key={item.id}
                            width="100%"
                            height="32px"
                            border="1px solid #dee2e6"
                            display="flex"
                            alignItems="center"
                            color="#fff"
                            justifyContent="center"
                            sx={{
                                background: 'linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5)',
                            }}
                        >
                            <Typography variant="p">{item.name}</Typography>
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={16} display="flex">
                    {/* Hiện thị các ngày trong tuần */}
                    {listDay.map((item) => (
                        <CourseOfDay day={item} key={item.id} listLesson={listLesson} room={room} />
                    ))}
                </Grid>
                <Grid item xs={2} display="flex" flexDirection="column">
                    {/* Hiện thị thời gian của từng khóa học */}
                    {listTime.map((item, index) => (
                        <Box
                            key={index}
                            width="100%"
                            height="32px"
                            border="1px solid #dee2e6"
                            display="flex"
                            alignItems="center"
                            color="#fff"
                            justifyContent="center"
                            sx={{
                                background: 'linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5)',
                            }}
                        >
                            <Typography variant="p">{item}</Typography>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Schedule;
