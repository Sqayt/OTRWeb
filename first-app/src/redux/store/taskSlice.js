import {createSlice} from "@reduxjs/toolkit";
import postTask from "../../rest/task/postTask";

const taskSlice = createSlice({
    name: "todoTask",
    initialState: {
        todos: []
    },
    reducers: {
        addTask(state, action) {

        },
        createTask(state, action) {
            postTask(action.payload)
        },
        setTasks(state, action) {
            state.todos.push(action.payload)
        },
        deleteTask(state, action) {

        }
    }
})

export default taskSlice.reducer;

export const {addTask, deleteTask, createTask, setTasks} = taskSlice.actions;