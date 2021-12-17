import { SET_SHOW_CONFIRM } from "../actions";

const initialState = {
    showConfirm: false
}

export const setShowConfirm = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_CONFIRM:
            return {
                ...state,
                showConfirm: action.payload,
            }
        default:
            return state;
    }



}