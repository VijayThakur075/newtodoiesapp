export const SET_TASK = 'SET_TASK';
export const SET_ARCHIVED = 'SET_ARCHIVED';
export const SET_PROJECT = 'SET_PROJECT';
export const SET_SELECTEDPROJECT = 'SET_SELECTEDPROJECT';
export const ADD_TASK = 'ADD_TASK';
export const SET_SHOW_MAIN = 'SET_SHOW_MAIN';
export const SET_SHOW_PROJECT_OVERLY= 'SET_SHOW_PROJECT_OVERLY';
export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const SET_SHOW_CONFIRM = 'SET_SHOW_CONFIRM';
export const SET_ACTIVE = 'SET_ACTIVE';
export const SHOW_PROJECT = 'SHOW_PROJECT'



export const settask = (payload) => ({ type: SET_TASK, payload });
export const setArchivedTasks = (payload) => ({ type: SET_ARCHIVED, payload });
export const setProjects = (payload) => ({ type: SET_PROJECT, payload });
export const setselectedProject = (payload) => ({ type: SET_SELECTEDPROJECT, payload });
export const setAddTask = (payload) => ({type: ADD_TASK, payload })
export const setShowProjectOverlay = (payload) => ({type: SET_SHOW_PROJECT_OVERLY, payload })
export const setShoeMain = (payload) => ({type: SET_SHOW_MAIN, payload });
export const setprojectName= (payload) => ({type: SET_PROJECT_NAME, payload });
export const setshoWConfirm= (payload) =>({type:SET_SHOW_CONFIRM, payload});
export const setActive= (payload) =>({type:SET_ACTIVE, payload});
export const setShowProjects= (payload) =>({type: SHOW_PROJECT, payload});

