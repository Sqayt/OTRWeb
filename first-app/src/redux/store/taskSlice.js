// import {createSlice} from "@reduxjs/toolkit";
// import postTask from "../../rest/task/postTask";

// const taskSlice = createSlice({
//     name: "todoTask",
//     initialState: {
//         todos: [
//                     {
//                         id: 1,
//                         description: "Test",
//                         fullNamePerson: "Danil Ivanov",
//                         priority: 15
//                     }
//         ]
//     },
//     reducers: {
//         addTask(state, action) {
//
//         },
//         createTask(state, action) {
//             const task = {
//                 id: action.payload.id,
//                 description: action.payload.description,
//                 fullNamePerson: action.payload.fullNamePerson,
//                 priority: action.payload.priority
//             }
//             postTask(task)
//         },
//         getTask(state, action) {
//
//         },
//         deleteTask(state, action) {
//
//         }
//     }
// })