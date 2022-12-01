import axios from "axios";
import {useEffect, useState} from "react";
import {apiUrl} from "./configPerson";

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

                if (resp.data !== people) {
                    console.log("Успешное получение данных")
                    setPeople(resp.data);
                }
            })
            .catch(e => console.log(e));
    }, []);

    if (!people) return null;

    return people;
}