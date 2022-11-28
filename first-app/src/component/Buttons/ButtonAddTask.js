import './Button.css'
import {useState} from "react";
import Modal from '../Modal/ModalTask'

function ButtonAddTask() {
    const [show, setShow] = useState(false)

    return (
        <div className={'btnPosition'}>
            <button className={'btn'} onClick={() => setShow(true)}>
                <h2>Добавить задачу</h2>
            </button>
            <Modal title={'Добавить задачу'} btnType={'create'} show={show}
                         onClose = {() => setShow(false)}>
            </Modal>
        </div>
    )
}

export default ButtonAddTask