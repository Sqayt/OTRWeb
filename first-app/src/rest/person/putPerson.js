import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/persons/'

export default (id, person) => {

    axios
        .put(apiUrl + id, person)
        .then((resp) => {
            if (resp.status !== 200) {
                console.log('Не успешное обновление данных, ответ ' + resp.status + ', ошибка:\n');
                throw new Error();
            }
            console.log('Успешное обновление')
        })
        .catch((exception) => console.log(exception))
}