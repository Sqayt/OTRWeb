import {createSlice} from "@reduxjs/toolkit";
import postTask from "../../rest/task/postTask";
import deleteTask from "../../rest/task/deleteTask";
import putTask from "../../rest/task/putTask";

const taskSlice = createSlice({
    name: "todoTask",
    initialState: {
        todos: [],
        maxPriority: 0,
        minPriority: 0
    },
    reducers: {
        createTask(state, action) {
            postTask(action.payload.idPerson, action.payload)
        },
        setTasks(state, action) {
            state.todos.push(action.payload)
        },
        updateTask(state, action) {
            putTask(action.payload.personId, action.payload)
        },
        removeTask(state, action) {
            deleteTask(action.payload.personId, action.payload.id)
        },
        setPriority(state, action) {
            state.maxPriority = action.payload.maxPriority;
            state.minPriority = action.payload.minPriority;
        }
    }
})

export default taskSlice.reducer;

export const {restartTasks, updateTask, removeTask, createTask, setTasks, setPriority} = taskSlice.actions;