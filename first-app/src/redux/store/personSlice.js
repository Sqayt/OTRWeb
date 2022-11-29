import {createSlice} from '@reduxjs/toolkit';
import personPost from "../../rest/person/postPerson";

const personSlice = createSlice({
    name: 'todoPerson',
    initialState: {
        todos: []
    },
    reducers: {
        addPerson(state, action) {

        },
        createPerson(state, action) {
            personPost(action.payload)
        },
        setPeople(state, action) {
            state.todos.push(action.payload)
        },
        removePerson(state, action) {}
    },
});

export default personSlice.reducer;

export const {addPerson, removePerson, createPerson, setPeople} = personSlice.actions;