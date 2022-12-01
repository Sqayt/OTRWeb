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
    const fullNames = useSelector(state => state.toolPerson.todos)

    const description = useRef(null)
    const priorityArr = useRef(null)
    const selectValue = useRef(null)

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
                        <select id={'selectValue'} style={{marginTop: "45px", height: "25px", width: "200px"}} ref={selectValue}>
                            {fullNames.map((val) => {
                                return (
                                    <option id={val.id}>
                                        {val.surName} {val.name} {val.middleName}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "95px", marginTop: "45px"}}>Приоритет</label>
                        <input type={"number"} style={{marginTop: "45px", height: "20px", width: "50px"}} ref={priorityArr} />
                    </div>
                </div>

                <div className={'modal-footer'} style={{display:"flex"}}>
                    <button onClick={props.onClose} className={'btn_add'}>Отмена</button>
                    <div style={{marginLeft: "auto"}}>
                        <button className={'btn_add'} onClick={() => {
                            let options = document.getElementById("selectValue");
                            let id = options[options.selectedIndex].id

                            dispatch(createTask({
                                description: description.current.value,
                                personFullName: selectValue.current.value,
                                priority: priorityArr.current.value,
                                idPerson: id
                            }));
                            props.onClose();
                        }} style={{marginLeft:"20px"}}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}