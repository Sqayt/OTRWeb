import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
        name: "",
        initialState: {
            count: 0,
            todos: ['снять видео', "смонтировать видео", "рассказать про toolkit"]
        },
        reducers: {
            increment(state) {
                state.count = state.count + 1;
            },
            decrement(state) {
                state.count = state.count - 1;
            },
            addTodo(state, action) {
                state.todos.push(action.payload)
            },
            removeTodo(state) {
                state.todos.pop()
            }
        }
    },
)

export default toolkitSlice.reducer
export const {increment, decrement, addTodo, removeTodo} = toolkitSlice.actions
