import './Button.css'
import {useState} from "react";
import ModalCreate from "../Modal/Modal";
import BodyPerson from "../Body/BodyPersonCreate";

function ButtonAddPerson() {
    const [show, setShow] = useState(false);

    return (
        <div className={'btnPosition'}>
            <button className={'btn'} onClick={() => setShow(true)}>
                <h2>Добавить сотрудника</h2>
            </button>
            <ModalCreate title={'Добавить сотрудника'} btnType={'create'} show={show} body={BodyPerson()}
                         onClose = {() => setShow(false)}>
            </ModalCreate>
        </div>
    )
}


export default ButtonAddPerson