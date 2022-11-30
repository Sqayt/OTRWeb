import axios from "axios";
import {useEffect, useState} from "react";

const apiUrl = 'http://localhost:8081/task/api/v1/persons/'

export default () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((resp) => {
                if(resp.status !== 200) {
                    console.log('Не успешное получение данных, ответ ' + resp.status + ', ошибка:\n');
                    throw new Error();
                }

                setPeople(resp.data);
            })
            .catch(e => console.log(e));
    }, []);

    return people;
}