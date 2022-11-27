import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/tasks/'

function updateTask(data) {

    axios
        .put(apiUrl + data.id,
                data
            )
        .then((response) =>
            console.log(response))
        .catch((error) =>
            console.log(error))
}