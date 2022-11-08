import { createSelector } from '@reduxjs/toolkit';

export const selectorListTeacher = (state) => state.teachers;
export const selectorUser = (state) => state.user;
export const selectorListSchedule = (state) => state.schedule;
export const selectorListRoom = (state) => Object.keys(state.schedule);

export const selectorColors = createSelector(selectorListTeacher, selectorUser, (listTeacher) => {
    return listTeacher.map((item) => item.color);
});
export const selectorNameTeachers = createSelector(selectorListTeacher, (listTeacher) => {
    return listTeacher.map((item) => item.name);
});

export const selectorLessonsUser = createSelector(selectorListTeacher, selectorUser, (listTeacher, user) => {
    const teacher = listTeacher.find((teacher) => teacher.name === user.name);
    // console.log(teacher.lessonRegister.sort());

    const listLesson = teacher.lessonRegister;

    return listLesson;
});
