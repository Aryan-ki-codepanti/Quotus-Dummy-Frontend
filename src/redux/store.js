import { reducer } from "./rootReducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

export const store = createStore(reducer  , applyMiddleware(thunk));