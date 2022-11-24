import './Button.css'
import Modal from "../Modal/Modal";
import {useState} from "react";

function ButtonAddTask() {
    const [show, setShow] = useState(false)


    return (
        <div className={'btnPosition'}>
            <button className={'btnAddTask'} onClick={() => setShow(true)}>
                <h2>Добавить задачу</h2>
            </button>
            <Modal title={'Добавить задачу'} show={show} onClose = {() => setShow(false)}>
                <p>Добавить задачу?</p>
            </Modal>
        </div>
    )
}

export default ButtonAddTask