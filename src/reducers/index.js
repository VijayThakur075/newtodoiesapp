import { combineReducers } from 'redux';
import tasks from './setTask';
import Archiveds from './setArchived';
import projects from './setProjects';
import selectedprojects from './setSelectedProjects';
import addTask from './addTask';
import { setShowMain } from './showmain';
// import setShowProjectOverlay  from './setShowProjectOverlay.JS';
import projectName from './projectName';
import { setShowConfirm } from './shoeConfirm';
import showActive from './active';
import { showproject } from './showProject';

export default combineReducers({
 
   // setShowProjectOverlay,
   tasks,
   Archiveds,
   projects,
   selectedprojects,
   addTask,
   setShowMain,
   projectName,
   setShowConfirm,
   showActive,
   showproject,
});