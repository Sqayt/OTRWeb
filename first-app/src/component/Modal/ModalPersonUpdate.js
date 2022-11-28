import './Modal.css'
import {useCallback, useEffect} from "react";

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

    return (
        <div className={'modal'} onClick={props.onClose}>
            <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                <div className={'modal-header'}>
                    <h4 className={'modal-title'}>{props.title}</h4>
                </div>

                <div className={'modal-body'}>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Должность</label>
                        <input className={'post'} type={'text'} style={{paddingLeft: "2%", width: "210px", height: "25px", marginLeft:"auto"}}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Фамилия</label>
                        <input className={'surName'} type={'text'} style={{paddingLeft: "2%", width: "210px", height: "25px", marginLeft:"auto"}}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Имя</label>
                        <input className={'name'} type={'text'} style={{paddingLeft: "2%", width: "210px", height: "25px", marginLeft:"auto"}}/>
                    </div>
                    <div style={{display: "flex", margin: "25px"}}>
                        <label style={{marginRight: "100px", margin: "5px 15px 5px 0px"}}>Начальник</label>
                        <select id={'selectValue'} style={{paddingLeft: "2%", width: "225px", height: "25px", marginLeft:"auto"}}>
                            <option>Михаил Задорнов Сергеевич</option>
                            <option>Александр Жуйков Сергеевич</option>
                        </select>
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
                        <button onClick={props.onClose} className={'btn'} style={{marginLeft:"20px"}}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}