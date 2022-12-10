import { createSlice } from '@reduxjs/toolkit';
import { listTeacher } from '../../data';
// khỏi tạo dữ liệu giáo viên và logic thay đổi dữ liệu

const teacherSlice = createSlice({
    name: 'teacher',
    initialState: listTeacher,
    reducers: {
        // thêm giáo viên
        addTeacher(state, action) {
            state.push(action.payload);
        },
        // sửa thông tin giáo viên giáo viên
        editTeacher(state, action) {
            const index = state.findIndex((item) => item.name === action.payload.checkName);

            state[index] = action.payload.data;
        },

        addLesson: (state, action) => {
            const index = state.findIndex((item) => item.name === action.payload.checkName);
            state[index].lessonRegister.push(action.payload.data);
        },

        deleteLesson: (state, action) => {
            const { room, day, lesson } = action.payload.data;
            console.log(room, day, lesson);
            const index = state.findIndex((item) => item.name === action.payload.checkName);
            const newLesson = state[index].lessonRegister.filter((item) => {
                return item.room !== room || item.day !== day || item.lesson !== lesson;
            });
            state[index].lessonRegister = newLesson;
        },
    },
});

export const { actions: actionsTeacher } = teacherSlice;

export default teacherSlice;
