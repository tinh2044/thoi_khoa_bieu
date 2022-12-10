import { Box, Typography } from '@mui/material';
import React from 'react';

function CalendarLesson({ lessonRegister }) {
    // Lấy danh sách giáo viên đã đăng kí
    let newData = [
        ...lessonRegister,
    ]
    const sort_func = (arr) => {
        let len = arr.length;

        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i].room > arr[j].room) {
                    let item = arr[i];
                    arr[i] = arr[j];
                    arr[j] = item;

                } else if (arr[j].room === arr[i].room && arr[i].day > arr[j].day) {
                    let item = arr[i];
                    arr[i] = arr[j];
                    arr[j] = item;
                }
                else if (arr[j].day === arr[i].day && arr[i].lesson > arr[j].lesson) {
                    let item = arr[i];
                    arr[i] = arr[j];
                    arr[j] = item;
                }
            }
        }
        return arr;
    }

    newData = sort_func(newData)
    return (
        <Box>
            <Typography variant="h6" color="indigo">
                Danh sách tiết đã đăng kí
            </Typography>
            <Box overflow="scroll" maxHeight="400px">
                {newData.map((lesson, index) => (
                    <Box key={index} border="1px solid #ccc" py={1} px={0.5}>
                        <Typography>{`Bạn đã đăng kí tiết ${lesson.lesson} phòng ${lesson.room} vào ${lesson.day}`}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default React.memo(CalendarLesson);
