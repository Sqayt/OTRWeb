import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/persons/'

export default (person) => {

     axios
        .post(apiUrl, person)
        .then((response) =>
            console.log(response))
        .catch((exception) =>
            console.log(exception))

}