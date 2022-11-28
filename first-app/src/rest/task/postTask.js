import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/tasks/'

export default (task) => {
    
    axios
        .post(apiUrl, task)
        .then((response) => 
            console.log(response))
        .catch((exception) => 
            console.log(exception))   
}