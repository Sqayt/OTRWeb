import './ButtonAddPerson.css'
import {useState} from "react";
import Modal from "../Modal/Modal";

function ButtonAddPerson() {
    const [show, setShow] = useState(false)

    return (
        <div className={'btnPosition'}>
            <button className={'btnAddPerson'} onClick={() => setShow(true)}>
                <h2>Добавить сотрудника </h2>
            </button>
            <Modal title={'Добавить сотрудника'} show={show} onClose = {() => setShow(false)}>
                <p>Добавить сотрудника?</p>
            </Modal>
        </div>
    )
}

export default ButtonAddPerson