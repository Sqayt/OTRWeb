import './Button.css'
import {useEffect, useState} from "react";
import Modal from '../Modal/ModalPersonCreate';
import axios from "axios";
import {apiUrl} from "../../rest/person/configPerson";
import {useDispatch} from "react-redux";
import {setPeople} from "../../redux/store/personSlice";

function ButtonAddPerson() {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [state, setState] = useState(false)

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(resp => {
                if(resp.status !== 200) {
                    console.log('Не успешное получение данных, ответ ' + resp.status + ', ошибка:');
                    setState(false);

                    throw new Error();
                }
                setState(true);
                let dataPerson = resp.data

                dispatch(setPeople(dataPerson))
            })
            .catch(e => console.log(e))
    }, [show]);



    return (
        <div className={'btnPosition'}>
            <button className={'btn_switch'} disabled={!state} onClick={() => setShow(true)}>
                <h2>Добавить сотрудника</h2>
            </button>

            <Modal title={'Добавить сотрудника'} show={show} onType={'create'}
                   onClose = {() => {

                       setShow(false)

                   }} />

        </div>
    )
}

export default ButtonAddPerson