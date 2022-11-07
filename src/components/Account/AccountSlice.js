import { createSlice } from '@reduxjs/toolkit';
import { listTeacher } from '../../data';
// khỏi tạo dữ liệu user và logic thay đổi dữ liệu
const userSlice = createSlice({
    name: 'user',
    initialState: listTeacher[0],
    reducers: {
        // Logic thay đổi user đăng nhập
        change(state, action) {
            for (var key in state) {
                state[key] = action.payload[key];
            }
        },
    },
});
export const { actions: actionsUser } = userSlice;
export default userSlice;
