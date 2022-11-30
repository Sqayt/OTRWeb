import {createSlice} from "@reduxjs/toolkit";
import postTask from "../../rest/task/postTask";

const taskSlice = createSlice({
    name: "todoTask",
    initialState: {
        todos: [],
        maxPriority: 0,
        minPriority: 0
    },
    reducers: {
        addTask(state, action) {

        },
        createTask(state, action) {
            console.log(action.payload)
            postTask(action.payload)
        },
        setTasks(state, action) {
            state.todos.push(action.payload)
        },
        deleteTask(state, action) {

        },
        setPriority(state, action) {
            state.maxPriority = action.payload.maxPriority;
            state.minPriority = action.payload.minPriority;
        }
    }
})

export default taskSlice.reducer;

export const {addTask, deleteTask, createTask, setTasks, setPriority} = taskSlice.actions;