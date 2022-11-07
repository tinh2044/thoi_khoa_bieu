import { createSlice } from '@reduxjs/toolkit';
import { rooms } from '../../data';
// khỏi tạo dữ liệu thời khóa biểu và logic thay đổi dữ liệu

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: rooms,
    reducers: {
        // thêm tiết học
        addLesson(state, action) {
            const { room, day, lesson, data } = action.payload;
            state[room][day][lesson] = data;
        },
        // xóa tiết học
        deleteLesson(state, action) {
            const { room, day, lesson } = action.payload;
            state[room][day][lesson] = {};
        },
        // thay đổi dữ liệu của giáo viên trong từng tiết đăng khí khi giáo viên thay đổi
        changeData(state, action) {
            for (var indexRoom in state) {
                const room = state[indexRoom];

                for (var indexDay in room) {
                    const day = room[indexDay];

                    for (var indexLesson in day) {
                        let lesson = day[indexLesson];

                        if (Object.keys(lesson).length > 0) {
                            if (lesson.name === action.payload.checkName) {
                                state[indexRoom][indexDay][indexLesson] = action.payload.data;
                            }
                        }
                    }
                }
            }
        },
    },
});
export const { actions: actionsSchedule } = scheduleSlice;
export default scheduleSlice;
