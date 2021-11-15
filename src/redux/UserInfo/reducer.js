import { PUT_FILE, PUT_MESSAGE, PUT_ROOM } from "./types";

const initialState = {
    messages: null,
    files: null,
    rooms: null
};

export const UserInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_FILE:
            return {
                ...state,
                files: state.files
                    ? [...state.files, action.payload]
                    : [action.payload]
            };
        case PUT_MESSAGE:
            return {
                ...state,
                messages: state.messages
                    ? [...state.messages, action.payload]
                    : [action.payload]
            };
        case PUT_ROOM:
            return {
                ...state,
                rooms: state.rooms
                    ? [...state.rooms, action.payload]
                    : [action.payload]
            };
        default:
            return state;
    }
};
