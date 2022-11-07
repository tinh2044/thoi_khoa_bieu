import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
// import { week } from '../data';
import ChooseLesson from '../../features/ChooseLesson';
import { selectorListSchedule } from '../../redux/selector';

function CourseOfDay({ listLesson, day, room }) {
    // Lấy danh sách thời khóa kiểu
    const schedule = useSelector(selectorListSchedule);
    return (
        <Grid item xs={4} display="flex" flexDirection="column">
            {/* hiện thị ra thứ nếu là tiết rỗng ngược lại hiện thị ra nơi đăng ký hoặc hủy tiết */}
            {listLesson.map((lesson) =>
                lesson.name === '' ? (
                    <Box
                        key={lesson.id}
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
                        <Typography variant="p">{day.name}</Typography>
                    </Box>
                ) : (
                    <ChooseLesson
                        //Nơi đăng kí hoặc hủy tiết

                        key={lesson.id}
                        data={schedule[room][day.id][lesson.id]}
                        room={room}
                        day={day}
                        lesson={lesson}
                    />
                ),
            )}
        </Grid>
    );
}

export default React.memo(CourseOfDay);
