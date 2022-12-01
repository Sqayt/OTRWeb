import {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPerson} from "../../redux/store/personSlice";

export default (props) => {
    if (!props.show) {
        return null;
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

    const dispatch = useDispatch();
    const fullNames = useSelector(state => state.toolPerson.todos);

    const post = useRef(null);
    const surName = useRef(null);
    const name = useRef(null);
    const middleName = useRef(null);
    const branchName = useRef(null);
    const director = useRef(null);

    return (
         <div className={'modal'} onClick={props.onClose}>
            <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                <div className={'modal-header'}>
                    <h4 className={'modal-title'}>{props.title}</h4>
                </div>

                <div className={'modal-body'}>
                    <div className={'modal-div'}>
                        <label className={'modal-label'}>Начальник</label>
                        <select id={'selectValue'} ref={director} className={'modal-select'}>

                            {fullNames.map((val) => {
                                return (
                                 <option id={val.id}>{val.surName} {val.name} {val.middleName}</option>
                                )
                            })}

                            <option></option>
                        </select>
                    </div>

                    <div className={'modal-div'}>
                        <label className={'modal-label'}>Должность</label>
                        <input className={'modal-input'} name={'post'} type={'text'} ref={post}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Фамилия</label>
                        <input className={'modal-input'} name={'surName'} type={'text'} ref={surName}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Имя</label>
                        <input className={'modal-input'} name={'name'} type={'text'} ref={name}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Отчество</label>
                        <input className={'modal-input'} name={'middleName'} type={'text'} ref={middleName}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Название филиала</label>
                        <input className={'modal-input'} name={'myBranch'} type={'text'} ref={branchName}/>
                    </div>
                </div>

                <div className={'modal-footer'}>
                    <button onClick={props.onClose} className={'btn'}>Отмена</button>

                    <div className={'buttons_left'}>
                        <button className={'btn_add'} onClick={() => {
                            dispatch(createPerson(
                            {
                                    post: post.current.value,
                                    name: name.current.value,
                                    surName: surName.current.value,
                                    middleName: middleName.current.value,
                                    branchName: branchName.current.value,
                                    directorFullName: director.current.value
                                }
                            ));
                            props.onClose();
                        }}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}