import { SET_USER, CLEAR_USER } from "./types";

const initialState = {
    user: null
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.payload
            };
        case CLEAR_USER:
            return {
                user: null
            };
        default:
            return state;
    }
};
