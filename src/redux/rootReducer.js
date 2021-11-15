import { combineReducers } from "redux";
import { AuthReducer } from "./Auth/reducer";
import { UserInfoReducer } from "./UserInfo/reducer";

export const reducer = combineReducers({
    auth: AuthReducer,
    user: UserInfoReducer
});