import {useEffect, useState} from "react";
import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/tasks'

function Tasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(resp => {
                setTasks(resp.data)
            })
    }, []);

    return tasks
}

export default Tasks