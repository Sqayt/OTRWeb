import axios from "axios";
import {apiUrl} from "./configPerson";

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
        .catch((e) => console.log(e));
}