import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos : [],
    },
    reducers: {
        addPerson(state, action) {
            state.todos.push({
                post: action.payload.post,
                surName: action.payload.surName,
                name: action.payload.name,
                middleName: action.payload.middleName,
                branchName: action.payload.branchName
            });
        },
        removePerson(state, action) {}
    },
});

export const {addPerson, removePerson} = todoSlice.actions;

export default todoSlice.reducer;