import axios from "axios";

const apiUrl = 'http://localhost:8081/task/api/v1/tasks/'

export default (id) => {

    axios
        .delete(apiUrl + id)
        .then((resp) => {
            if (resp.status !== 200) {
                console.log('Неуспешное удаление, ответ ' + resp.status + ', ошибка: ');
                throw new Error();
            }
            console.log('Успешное удаление')
        })
        .catch((exception) =>
            console.log(exception))
}