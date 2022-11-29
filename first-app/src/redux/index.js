import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "redux";
import personSlice from "./store/personSlice";
import taskSlice from "./store/taskSlice";

const rootReducer = combineReducers({
    toolkit: personSlice,
    tooltask: taskSlice
})

export const store = configureStore({
   reducer: rootReducer
});