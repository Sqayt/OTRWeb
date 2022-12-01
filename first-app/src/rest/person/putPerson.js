import axios from "axios";
import {apiUrl} from "./configPerson";

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
        .catch((e) => console.log(e))
}