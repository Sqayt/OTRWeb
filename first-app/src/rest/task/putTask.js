import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/tasks/'

export default (id, task) => {

    axios
        .put(apiUrl + id, task)
        .then((response) =>
            console.log(response))
        .catch((error) =>
            console.log(error))
}