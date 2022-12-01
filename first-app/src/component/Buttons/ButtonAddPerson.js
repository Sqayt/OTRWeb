import './Button.css'
import {useState} from "react";
import Modal from '../Modal/ModalPersonCreate';

function ButtonAddPerson() {
    const [show, setShow] = useState(false);

    return (
        <div className={'btnPosition'}>

            <button className={'btn_switch'} onClick={() => setShow(true)}>
                <h2>Добавить сотрудника</h2>
            </button>

            <Modal title={'Добавить сотрудника'} show={show} onClose = {() => setShow(false)} />

        </div>
    )
}

export default ButtonAddPerson