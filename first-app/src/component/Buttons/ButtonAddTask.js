import './Button.css'
import {useEffect, useState} from "react";
import Modal from '../Modal/ModalTaskCreate'
import axios from "axios";
import {apiUrl} from "../../rest/task/configTask";
import {useDispatch} from "react-redux";
import {setTasks} from "../../redux/store/taskSlice";

function ButtonAddTask() {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
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
                setState(true)
                let dataTask = resp.data

                dispatch(setTasks(dataTask))
            })
            .catch(e => console.log(e))
    }, [show]);

    return (
        <div className={'btnPosition'}>

            <button className={'btn_switch'} disabled={!state} onClick={() => setShow(true)}>
                <h2>Добавить задачу</h2>
            </button>

            <Modal title={'Добавить задачу'} btnType={'create'} show={show}
                   onClose = {() => setShow(false)} />

        </div>
    )
}

export default ButtonAddTask