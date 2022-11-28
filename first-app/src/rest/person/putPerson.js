import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/persons/'

export default (id, person) => {

    axios
        .put(apiUrl + id, person)
        .then((response) =>
            console.log(response))
        .catch((exception) =>
            console.log(exception))
}