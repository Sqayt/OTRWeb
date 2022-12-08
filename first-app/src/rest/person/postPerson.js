import axios from "axios";
import {apiUrl} from "./configPerson";

export default async (person) => {

    axios
        .post(apiUrl, person)
        .then((resp) => {
            if (resp.status !== 200) {
                console.log('Не успешное сохранение, ответ ' + resp.status + ', ошибка:\n');
                throw new Error();
            }

            console.log('Успешное сохранение');
        })
        .catch(e => {
            console.log(e)
        });

}