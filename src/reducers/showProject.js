import { SHOW_PROJECT } from "../actions";

const initialState ={
    showProjects: true,
}

export const showproject =(state = initialState, action)=> {
  console.log(("task2", state));
    switch (action.type) {
      case SHOW_PROJECT:
        return {
          ...state,
        showProjects : action.payload,
        };
        default:
      return state;
  }
}