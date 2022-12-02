import {useDispatch} from "react-redux";
import getPeople from "../../rest/person/getPeople";
import {useEffect} from "react";
import {setPeople} from "../store/personSlice";

export default () => {
    const dispatch = useDispatch()

    const persons = getPeople()

    useEffect(() => {
        persons.map((it) => {
            dispatch(setPeople(it))
        })
    }, [persons])
}