import { ADD_TASK } from "../actions";

const initialState = {
    task:'',
   
   }
   
   export default function addTask (state = initialState, action) {
  console.log('state', state);
     switch (action.type) {
       case ADD_TASK:
         return {
           ...state,
         task : action.payload,
         };
         default:
       return state;
   }
 }