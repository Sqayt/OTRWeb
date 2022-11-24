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
                    {props.children}
                </div>
                <div className={'modal-footer'}>
                    <button onClick={props.onClose} className={'btn'}>Close</button>
                </div>
            </div>
        </div>
    )
}