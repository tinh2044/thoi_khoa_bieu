import { createSelector } from '@reduxjs/toolkit';

export const selectorValueInput = (state) => state.valueInput;
export const selectorListTeacher = (state) => state.teachers;
export const selectorUser = (state) => state.user;
export const selectorListSchedule = (state) => state.schedule;
export const selectorListRoom = (state) => Object.keys(state.schedule);

export const selectorColors = createSelector(selectorListTeacher, selectorUser, (listTeacher) => {
    return listTeacher.map((item) => item.color);
});
export const selectorNameTeachers = createSelector(selectorListTeacher, selectorUser, (listTeacher) => {
    return listTeacher.map((item) => item.name);
});
