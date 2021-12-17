import { SET_ACTIVE } from "../actions";

const initialState = {
    active: '',
}

export default function showActive(state = initialState, action) {

    switch (action.type) {
        case SET_ACTIVE:
            return {
                ...state,
                active: action.payload,
            };
        default:
            return state;
    }
}