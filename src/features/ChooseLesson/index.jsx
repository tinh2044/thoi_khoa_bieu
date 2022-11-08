import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { selectorListSchedule, selectorListRoom, selectorUser } from '../../redux/selector';
import { actionsSchedule } from '../../components/Schedule/ScheduleSlice';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/themes/light.css';
import { actionsTeacher } from '../../components/Teacher/TeacherSlice';

function ChooseLesson({ data, day, lesson, room }) {
    // kiểm tra tiết này có người đăng kí chưa
    const hasLesson = Object.keys(data).length > 0;
    const dispatch = useDispatch();
    // Lấy tài khoản đang đăng nhập
    const user = useSelector(selectorUser);
    const schedule = useSelector(selectorListSchedule);
    const listRooms = useSelector(selectorListRoom);
    // xử lí thêm tiết học
    const handleAddLesson = () => {
        // Kiểm tra giáo viên có đăng kí tiết này ở phòng nào khác không
        const roomHasLesson = listRooms.find((item) => {
            const crrLesson = schedule[item][day.id][lesson.id];
            let check;
            if (Object.keys(crrLesson).length > 0) {
                check = user.name === crrLesson.name;
            }
            return check;
        });
        // nếu giáo viên đã đăng kí tiết này ở phòng khác thì thông báo
        if (roomHasLesson) {
            toast.error(`Bạn đã đăng kí tiết này ở phòng ${roomHasLesson[roomHasLesson.length - 1]} `);
            return;
        } else {
            // Gửi lên redux actions thêm giáo viên đã đăng ký vào tiết này
            dispatch(
                actionsSchedule.addLesson({
                    room: room,
                    day: day.id,
                    lesson: lesson.id,
                    data: user,
                }),
            );
            // Thêm tiết học vào tài khoản giáo viên
            dispatch(
                actionsTeacher.addLesson({
                    checkName: user.name,
                    data: {
                        room: room[room.length - 1],
                        day: day.name,
                        lesson: lesson.id[lesson.id.length - 1],
                    },
                }),
            );
            // Thông báo giáo viên đã đăng kí thành công
            toast.success(
                `Bạn đã đăng kí ${lesson.name[0].toLowerCase() + lesson.name.slice(1)} của phòng ${
                    room[room.length - 1]
                } vào ${day.name[0].toLowerCase() + day.name.slice(1)}`,
                {
                    autoClose: 2500,
                },
            );
        }
    };
    // Xử lý xóa tiết học
    const handleDeleteLesson = (e) => {
        // Ngăn chặn hành vi nỗi bọt của js
        e.stopPropagation();
        // thông báo xóa thành công
        toast.info(
            `Bạn đã hủy đăng kí ${lesson.name[0].toLowerCase() + lesson.name.slice(1)} của phòng ${
                room[room.length - 1]
            } vào ${day.name[0].toLowerCase() + day.name.slice(1)}`,
            {
                autoClose: 2500,
            },
        );
        // Gửi lên redux actions xóa tiết học
        dispatch(
            actionsSchedule.deleteLesson({
                room: room,
                day: day.id,
                lesson: lesson.id,
            }),
        );

        dispatch(
            actionsTeacher.deleteLesson({
                checkName: user.name,
                data: {
                    room: room[room.length - 1],
                    day: day.name,
                    lesson: lesson.id[lesson.id.length - 1],
                },
            }),
        );
    };
    const handleNotifications = (e) => {
        e.stopPropagation();

        if (data.name !== user.name) {
            toast.info('Đã có người đăng ký');
        }
    };
    // Hiện thị tip
    const renderTooltip = (props) => {
        return (
            <Box borderRadius={2} tabIndex="-1" {...props}>
                <Typography variant="p" component="p">
                    {data.name}
                </Typography>
                <Typography variant="p" component="p">
                    {data.course}
                </Typography>
            </Box>
        );
    };
    return (
        <Box
            sx={{
                cursor: 'pointer',
                width: '100%',
                height: '32px',
                border: '1px solid #dee2e6',
                backgroundColor: '#fff',
                transition: 'all 0.2s linear',
                p: '2px',

                ':hover': {
                    backgroundColor: hasLesson ? '#fff' : '#cccccc66',
                },
            }}
            onClick={handleAddLesson}
        >
            {/* Kiểm tra nếu có tiết này có giáo viên đăng kí => hiệ thị ra block với màu giáo viên chọn */}
            {hasLesson && (
                <Tippy
                    // Hiện thị tip khi hover vào block
                    followCursor="horizontal"
                    plugins={[followCursor]}
                    arrow
                    animation="shift-away"
                    theme="material"
                    placement="top"
                    content={renderTooltip()}
                    moveTransition="all 0.1s linear"
                >
                    <Box
                        sx={{
                            backgroundColor: data.color,
                            width: '100%',
                            height: '100%',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            cursor: 'default',
                            ':hover .MuiIconButton-root': {
                                opacity: '1 !important',
                            },
                        }}
                        onClick={handleNotifications}
                    >
                        {/* Nếu tên trong thời khóa biểu giống tên đang đăng nhập => cho phép xóa */}
                        {user.name === data.name && (
                            <IconButton
                                sx={{ p: 0, opacity: 0, transition: 'all 0.2s linear', cursor: 'pointer' }}
                                onClick={handleDeleteLesson}
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </Box>
                </Tippy>
            )}
        </Box>
    );
}

export default React.memo(ChooseLesson);
