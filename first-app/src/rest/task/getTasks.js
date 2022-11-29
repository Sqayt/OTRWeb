import {useEffect, useState} from "react";
import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/tasks/'

export default () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error()
                }

                setTasks(resp.data);
            })
            .catch(e => console.log(e))
    }, []);

    return tasks;
}