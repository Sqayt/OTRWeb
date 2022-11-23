import axios from "axios";
import {useEffect, useState} from "react";

const apiUrl = 'http://localhost:8081/task/api/v1/persons'

function People() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(resp => {
                setPeople(resp.data);
            })
    }, []);

    return people
}

export default People