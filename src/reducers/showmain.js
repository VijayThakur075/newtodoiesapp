import { SET_SHOW_MAIN } from "../actions";

const initialState ={
    showMain: true,
}

export const setShowMain =(state = initialState, action)=> {
  console.log(("task2", state));
    switch (action.type) {
      case SET_SHOW_MAIN:
        return {
          ...state,
        showMain : action.payload,
        };
        default:
      return state;
  }
}