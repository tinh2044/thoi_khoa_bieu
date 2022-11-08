import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectorLessonsUser } from '../../redux/selector';

function CalendarLesson() {
    // Lấy danh sách giáo viên đã đăng kí
    const lessonRegister = useSelector(selectorLessonsUser);

    return (
        <Box>
            <Typography variant="h6" color="indigo">
                Danh sách tiết đã đăng kí
            </Typography>
            <Box overflow="scroll" maxHeight="400px">
                {lessonRegister.map((lesson, index) => (
                    <Box key={index} border="1px solid #ccc" py={1} px={0.5}>
                        <Typography>{`Bạn đã đăng kí tiết ${lesson.lesson} phòng ${lesson.room} vào ${lesson.day}`}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default CalendarLesson;
