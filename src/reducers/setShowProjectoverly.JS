import { SET_SHOW_PROJECT_OVERLY } from "../actions";

const initialState ={
   projectOverly : false,
}

export const setShowProjectOverlay =(state = initialState, action)=> {
    switch (action.type) {
      case SET_SHOW_PROJECT_OVERLY:
        return {
          ...state,
          projectOverly : action.payload,
        };
        default:
      return state;
  }
}