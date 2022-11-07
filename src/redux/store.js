import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../components/Account/AccountSlice';
import scheduleSlice from '../components/Schedule/ScheduleSlice';
import teacherSlice from '../components/Teacher/TeacherSlice';

// Khởi tạo kho dữ liệu chung
const store = configureStore({
    // dữ liệu
    reducer: {
        teachers: teacherSlice.reducer,
        user: userSlice.reducer,
        schedule: scheduleSlice.reducer,
    },
});
export default store;
