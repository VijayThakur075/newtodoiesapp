import { SET_PROJECT_NAME } from "../actions";

const initialState = {
    projectname: '',
}

export default function projectName(state = initialState, action) {

    switch (action.type) {
        case SET_PROJECT_NAME:
            return {
                ...state,
                projectname: action.payload,
            };
        default:
            return state;
    }
}