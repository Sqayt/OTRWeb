import './Modal.css'
import {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removePerson, updatePerson} from "../../redux/store/personSlice";

export default (props) => {
    if (!props.show) {
        return null
    }

    const dispatch = useDispatch()
    const fullNames = useSelector(state => state.toolkit.todos)


    const post = useRef(null)
    const surName = useRef(null)
    const name = useRef(null)
    const middleName = useRef(null)
    const director = useRef(null)

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
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Должность</label>
                        <input className={'post'} type={'text'} style={{paddingLeft: "2%", width: "210px",
                            height: "25px", marginLeft:"auto"}} ref={post}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Фамилия</label>
                        <input className={'surName'} type={'text'} style={{paddingLeft: "2%", width: "210px",
                            height: "25px", marginLeft:"auto"}} ref={surName}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Имя</label>
                        <input className={'name'} type={'text'} style={{paddingLeft: "2%", width: "210px",
                            height: "25px", marginLeft:"auto"}} ref={name}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Отчество</label>
                        <input className={'middleName'} type={'text'} style={{paddingLeft: "2%", width: "210px",
                            height: "25px", marginLeft:"auto"}} ref={middleName}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Начальник</label>
                        <select id={'selectValue'} style={{paddingLeft: "2%", width: "225px", height: "25px",
                            marginLeft:"auto"}} ref={director}>

                            {fullNames.map((val) => {
                                return (
                                    <option>{val.surName} {val.name} {val.middleName}</option>
                                )
                            })}
                            <option></option>
                        </select>
                    </div>
                </div>

                <div className={'modal-footer'} style={{display:"flex"}}>
                    <button onClick={props.onClose} className={'btn'}>Отмена</button>
                    <div style={{marginLeft: "auto"}}>
                        <button className={'btn'} onClick={() => {
                            dispatch(removePerson(props.id));
                            props.onClose();
                        }
                        }>Удалить</button>
                        <button className={'btn'} onClick={() => {
                            dispatch(updatePerson({
                                id: props.id,
                                post: post.current.value,
                                name: name.current.value,
                                surName: surName.current.value,
                                middleName: middleName.current.value,
                                directorFullName: director.current.value
                            }))
                            props.onClose()
                        }} style={{marginLeft:"20px"}}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}