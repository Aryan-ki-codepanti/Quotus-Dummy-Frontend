import { SET_USER, CLEAR_USER } from "./types";

const initialState = {
    user: null,
    host: `http://localhost:1337`
};

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case CLEAR_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};
