import { combineReducers } from 'redux'
import { removeListReducer } from "./removelistReducer";
import { addListReducer } from "./addlistReducer";

export const reducers = combineReducers({
    remove : removeListReducer,
    add : addListReducer
});