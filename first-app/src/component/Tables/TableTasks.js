import './Table.css'
import {useEffect, useState} from "react";
import Modal from "../Modal/ModalTaskUpdate";
import {useDispatch, useSelector} from "react-redux";
import TableTasksHead from "./TableHead/TableTasksHead";
import axios from "axios";
import {apiUrl} from "../../rest/task/configTask";
import {setTasks} from "../../redux/store/taskSlice";

function TableTasks() {
    const dispatch = useDispatch()

    const [id, setId] = useState(0)
    const [show, setShow] = useState(false)

    const tasks = useSelector(state => state.toolTask.todos)

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(resp => {
                if(resp.status !== 200) {
                    console.log('Не успешное получение данных, ответ ' + resp.status + ', ошибка:');
                    throw new Error();
                }

                if (resp.data !== tasks) {
                    console.log('Успешное получение данных');

                    resp.data.map((it) => {
                        dispatch(setTasks(it))
                    });
                }
            })
            .catch(e => console.log(e))
    }, [show]);

    return (
        <div className={'Tables'}>
            <table>
                <TableTasksHead />

                {tasks.map((val, key) => {
                    return (
                        <tbody key={key}>
                            <tr>
                                <td id={val.id}>{val.id}</td>
                                <td>
                                    <label className={'hyper-word'} onClick={() => {
                                               setId(val.id)
                                               setShow(true)
                                           }}>
                                        {val.description}
                                    </label>
                                </td>
                                <td>{val.fullNamePerson}</td>
                                <td>{val.priority}</td>
                            </tr>
                        </tbody>
                    )}
                )}
            </table>

            <Modal title={'Редактирование - Задача №' + id} btnType={'update'}
                   show={show} id={id} onClose = {() => setShow(false)} />

        </div>
    )
}

export default TableTasks
