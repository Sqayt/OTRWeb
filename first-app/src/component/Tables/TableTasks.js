import './Table.css'
import {useState} from "react";
import Modal from "../Modal/ModalTaskUpdate";
import {useSelector} from "react-redux";
import TableTasksHead from "./TableHead/TableTasksHead";
import setDataTask from "../../redux/logic/setDataTask";

function TableTasks() {

    const tasks = useSelector(state => state.toolTask.todos)

    setDataTask();

    const [show, setShow] = useState(false)
    const [id, setId] = useState(0)

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
