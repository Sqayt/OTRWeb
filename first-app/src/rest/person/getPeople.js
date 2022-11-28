import axios from "axios";
import {useEffect, useState} from "react";

const apiUrl = 'http://localhost:8081/task/api/v1/persons/'

export default () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(resp => {
                console.log(resp.data)
                setPeople(resp.data);
            })
            .catch(txt => {
                console.log(txt);
                setPeople([]);
            })
    }, [setPeople]);



    return people;
}