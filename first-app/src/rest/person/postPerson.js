import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/persons/'

export default (person) => {

     axios
        .post(apiUrl, person)
        .then((resp) => {
            if (resp.status !== 200) {
                throw new Error()
            }
            console.log('Успешное сохранение')
        })
        .catch((exception) =>
            console.log('Неуспешное сохранение ' + exception))

}