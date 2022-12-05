import axios from "axios";
import {apiUrl} from './configTask';

export default (idPerson, task) => {
    
    axios
        .post(apiUrl, task)
        .then((resp) => {
            console.log(resp)
            if (resp.status !== 200) {
                console.log('Не успешное сохранение даных, ответ ' +  resp.status + ', ошибка:');
                throw new Error();
            }
            console.log('Успешное сохранение')
        })
        .catch(e => console.log('Не успешное сохранение' + e))
}