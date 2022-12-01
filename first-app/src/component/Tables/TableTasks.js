import './Table.css'
import {useEffect, useState} from "react";
import Modal from "../Modal/ModalTaskUpdate";
import getTasks from "../../rest/task/getTasks";
import {useDispatch, useSelector} from "react-redux";
import {setPriority, setTasks} from "../../redux/store/taskSlice";
import TableTasksHead from "./TableHead/TableTasksHead";

function TableTasks() {

    const dispatch = useDispatch()

    const dataTask = getTasks()
    useEffect(() => {

        let max = 0;
        let min = 0;
        dataTask.map(it => min = it.priority)

        dataTask.map((it) => {
            dispatch(setTasks(it));

            if (it.priority > max) {
                max = it.priority;
            }

            if (it.priority < min) {
                min = it.priority;
            }
        });

        dispatch(setPriority({
            maxPriority: max,
            minPriority: min
        }))

    }, [dataTask])

    const tasks = useSelector(state => state.toolTask.todos)

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
