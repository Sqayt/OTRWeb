import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/persons/'

export default (id) => {

    axios
        .delete(apiUrl + id)
        .then((resp) => {
            if (resp.status !== 200) {
                console.log('Не успешное удаление, ответ ' + resp.status + ', ошибка:\n');
                throw new Error();
            }
            console.log('Успешное удаление');
        })
        .catch((exception) => console.log(exception));
}