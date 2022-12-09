import './Modal.css'
import {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeTask, updateTask} from "../../redux/store/taskSlice";
import MyAlertPerson from "./Elements/MyAlertPerson";

export default (props) => {
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

    const dispatch = useDispatch()
    const fullNames = useSelector(state => state.toolPerson.todos)

    const description = useRef(null)
    const selectValue = useRef(null)
    const priorityArr = useRef(null)

    return (
        <div className={'modal'} onClick={props.onClose}>
            <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                <div className={'modal-header'}>
                    <h4 className={'modal-title'}>{props.title}</h4>
                </div>

                <div className={'modal-body'}>
                    <div className={'modal-div'}>
                        <label className={'modal-label'}>Описание</label>
                        <textarea className={'modal-textarea'} ref={description}/>
                    </div>
                    <div className={'modal-div'}>
                        <label className={'modal-label'}>Отвественный</label>
                        <select id={'selectedPerson'} ref={selectValue} className={'modal-select'}>
                            {fullNames.map((val) => {
                                return (
                                    <option value={val.id}>
                                        {val.surName} {val.name} {val.middleName}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={'modal-div'}>
                        <label className={'modal-label'}>Приоритет</label>
                        <input type={"number"} className={'modal-input-number'} ref={priorityArr} />
                    </div>
                </div>

                <div className={'modal-footer'}>
                    <button onClick={props.onClose} className={'btn'}>Отмена</button>
                    <div className={'buttons_left'}>
                        <button className={'btn'} onClick={() => {dispatch(removeTask(
                                props.id
                        ));
                            props.onClose();
                        }}>Удалить</button>
                        <button className={'btn_add'} onClick={() => {
                            let task = {
                                description: description.current.value,
                                personFullName: selectValue.current.text,
                                priority: priorityArr.current.value,
                                id: props.id,
                                fullNamePerson: selectValue.current.value
                            }

                            let myAlert = MyAlertPerson(task)

                            if (!myAlert) {
                                dispatch(updateTask
                                (
                                    task
                                ));
                                props.onClose();
                            }
                        }}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}