import './Button.css'
import ModalCreate from "../Modal/Modal";
import {useState} from "react";
import BodyTask from "../Body/BodyTaskCreate";

function ButtonAddTask() {
    const [show, setShow] = useState(false)

    return (
        <div className={'btnPosition'}>
            <button className={'btn'} onClick={() => setShow(true)}>
                <h2>Добавить задачу</h2>
            </button>
            <ModalCreate title={'Добавить задачу'} btnType={'create'} show={show} body={BodyTask()}
                         onClose = {() => setShow(false)}>
            </ModalCreate>
        </div>
    )
}

export default ButtonAddTask