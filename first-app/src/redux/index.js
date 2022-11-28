import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "redux";
import todoSlice from "./store/personSlice";

const rootReducer = combineReducers({
    toolkit: todoSlice
})

export const store = configureStore({
   reducer: rootReducer
});