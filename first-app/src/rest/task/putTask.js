import axios from "axios";
import {apiUrl} from "./configTask";

export default async (id, task) => {

    axios
        .put(apiUrl + id, task)
        .then((resp) => {
            if (resp.status !== 200) {
                console.log('Не успешное обновление данных, ответ ' + resp.status + ', ошибка:');
                throw new Error();
            }

            console.log("Успешное обновление данных");
        })
        .catch(error => console.log(error));
}