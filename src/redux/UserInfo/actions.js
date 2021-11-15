import { PUT_FILE , PUT_MESSAGE , PUT_ROOM } from "./types";

export const putFile = file => ({
    type: PUT_FILE,
    payload: file
});

export const putMessage = message => ({
    type: PUT_MESSAGE,
    payload: message
});

export const putRoom = room => ({
    type: PUT_ROOM,
    payload: room
});