import { SET_ARCHIVED } from "../actions";

const initialState = {
    archived:[],   
   }
   
   export default function Archiveds (state = initialState, action) {
  
     switch (action.type) {
       case SET_ARCHIVED:
         return {
           ...state,
         archived : action.payload,
         };
         default:
       return state;
   }
 }