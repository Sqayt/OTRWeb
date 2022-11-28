import {useEffect, useState} from "react";
import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/tasks/'

export default () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(resp => {
                setTasks(resp.data);
            })
            .catch(txt => {
                console.log(txt);
                setTasks([]);
            })
    }, []);

    return tasks;
}