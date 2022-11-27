import './Modal.css'
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {addPerson} from "../../redux/store/todoSlice";

export default (props) => {
    const dispatch = useDispatch();

    const addTask = () => dispatch(addPerson({
        id: "1",
        surName: "",
        name: "",
        middleName: "",
        branchName: ""
    }))

    if (!props.show) {
        return null
    }

    const { onClose } = props;
    const closeOnEscapeKeyDown = useCallback((e) => {
        if ((e.charCode || e.keyCode) === 27 ) {
            props.onClose()
        }
    }, [onClose]);

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [closeOnEscapeKeyDown]);

    return (
        <div className={'modal'} onClick={props.onClose}>
            <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                <div className={'modal-header'}>
                    <h4 className={'modal-title'}>{props.title}</h4>
                </div>
                <div className={'modal-body'}>
                    {props.body}
                </div>
                <div className={'modal-footer'} style={{display:"flex"}}>
                    <button onClick={props.onClose} className={'btn'}>Отмена</button>
                    <div style={{marginLeft: "auto"}}>
                        { props.btnType === 'update' &&
                            <button onClick={props.onClose} className={'btn'}>
                                Удалить
                            </button>
                        }
                        <button onClick={props.onClose} className={'btn'} style={{marginLeft:"20px"}}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}