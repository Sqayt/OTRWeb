import {useEffect, useState} from "react";
import axios from "axios";
import {apiUrl} from "./configTask";

export default () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(resp => {
                if(resp.status !== 200) {
                    console.log('Не успешное получение данных, ответ ' + resp.status + ', ошибка:');
                    throw new Error();
                }

                console.log('Успешное получение данных');
                setTasks(resp.data);
            })
            .catch(e => console.log(e))
    }, []);

    return tasks;
}