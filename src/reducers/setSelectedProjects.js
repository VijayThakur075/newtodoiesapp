import {  SET_SELECTEDPROJECT } from "../actions";
const initialState = {
    selectedProject : 'INBOX',
   
   }
   
   export default function selectedprojects (state = initialState, action) {
  
     switch (action.type) {
       case SET_SELECTEDPROJECT:
         return {
           ...state,
         selectedProject : action.payload,
         };
         default:
       return state;
   }
 }