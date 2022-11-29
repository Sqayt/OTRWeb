import './Modal.css'
import {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTask} from "../../redux/store/taskSlice";

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
    const fullNames = useSelector(state => state.toolkit.todos)

    const priority = useRef(null)
    const description = useRef(null)
    const personFullName = useRef(null)


    return (
        <div className={'modal'} onClick={props.onClose}>
            <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                <div className={'modal-header'}>
                    <h4 className={'modal-title'}>{props.title}</h4>
                </div>

                <div className={'modal-body'}>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", marginTop: "45px"}}>Описание</label>
                        <textarea style={{paddingLeft: "2%", width: "100%", boxSizing: "border-box", padding:"10px", height: "150px"}} ref={description}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "69px", marginTop: "45px"}}>Отвественный</label>
                        <select id={'selectValue'} style={{marginTop: "45px", height: "25px", width: "150px"}}
                                ref={personFullName}>

                            {fullNames.map((val) => {
                                return (
                                    <option>{val.surName} {val.name} {val.middleName}</option>
                                )
                            })}

                            <option></option>
                        </select>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", marginTop: "45px"}}>Приоритет</label>

                        <div className={'btn_position'} style={{display: "flex", marginTop: "5%"}}>
                            <h3 ref={priority}>5</h3>
                            <button className={'btn_add'} style={{height: "20px", width: "20px", marginLeft: "18%", marginTop: "45%", textAlign: "center"}}>+</button>
                            <button className={'btn_rem'} style={{height: "20px", width: "20px", marginLeft: "18%", marginTop: "45%", textAlign: "center"}}>-</button>
                        </div>
                    </div>
                </div>

                <div className={'modal-footer'} style={{display:"flex"}}>
                    <button onClick={props.onClose} className={'btn'}>Отмена</button>
                    <div style={{marginLeft: "auto"}}>
                        { props.btnType === 'update' &&
                            <button onClick={props.onClose} className={'btn'}>
                                Удалить
                            </button>
                        }
                        <button className={'btn'} onClick={() => {
                            dispatch(createTask({
                                description: description.current.value,
                                personFullName: personFullName.current.value,
                                priority: priority.current.value
                            }))
                        }} style={{marginLeft:"20px"}}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}