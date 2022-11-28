import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/persons/'

export default (id) => {

    axios
        .delete(apiUrl + id)
        .then((response) =>
            console.log(response))
        .catch((exception) =>
            console.log(exception))
}