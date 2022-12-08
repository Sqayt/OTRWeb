import {createSlice} from "@reduxjs/toolkit";
import postTask from "../../rest/task/postTask";
import deleteTask from "../../rest/task/deleteTask";
import putTask from "../../rest/task/putTask";

const taskSlice = createSlice({
    name: "todoTask",
    initialState: {
        todos: [],
    },
    reducers: {
        createTask(state, action) {
            postTask(action.payload)
        },
        setTasks(state, action) {
            state.todos = action.payload
        },
        updateTask(state, action) {
            putTask(action.payload.id, action.payload)
        },
        removeTask(state, action) {
            deleteTask(action.payload)
        },
    }
})

export default taskSlice.reducer;

export const {updateTask, removeTask, createTask, setTasks} = taskSlice.actions;