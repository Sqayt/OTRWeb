import axios from "axios";
import {apiUrl} from "./configTask";

export default (idPerson, idTask) => {

    axios
        .delete(apiUrl + idPerson + "/" + idTask)
        .then((resp) => {
            if (resp.status !== 200) {
                console.log('Неуспешное удаление, ответ ' + resp.status + ', ошибка: ');
                throw new Error();
            }

            console.log('Успешное удаление')
        })
        .catch(e => console.log(e));
}