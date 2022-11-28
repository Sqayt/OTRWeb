import {createSlice} from '@reduxjs/toolkit';
import personPost from "../../rest/person/postPerson";

const personSlice = createSlice({
    name: 'todoPerson',
    initialState: {
        todos: [
                    {
                        id: 1,
                        name:'Danil',
                        surName:'Ivanov',
                        middleName: 'Sergeevich',
                        branchName: 'OAO',
                        tasks : [
                            {
                                id: 1,
                                priority: 15,
                                name: "Test",
                                description: "Test"
                            }
                        ]
                    }
                ]
    },
    reducers: {
        addPerson(state, action) {
        },
        createPerson(state, action) {
            const person = {
                post: action.payload.post,
                surName: action.payload.surName,
                name: action.payload.name,
                middleName: action.payload.middleName,
                branchName: action.payload.branchName
            }
            personPost(person)
        },
        setPeople(state, action) {
            // const people = getPeople()
            // people.map(data => console.log(data[0].name))
            // state.todos.push(people)
        },
        removePerson(state, action) {}
    },
});

export default personSlice.reducer;

export const {addPerson, removePerson, createPerson, setPeople} = personSlice.actions;