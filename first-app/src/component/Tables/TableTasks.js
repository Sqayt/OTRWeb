import './Table.css'
import {useEffect, useRef, useState} from "react";
import Modal from "../Modal/ModalTaskCreate";
import getTasks from "../../rest/task/getTasks";
import {useDispatch, useSelector} from "react-redux";
import {setPriority, setTasks} from "../../redux/store/taskSlice";

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

    const tasks = useSelector(state => state.tooltask.todos)

    const [show, setShow] = useState(false)

    const test = useRef(0)

    const [id, setId] = useState(0)

    return (
        <div className={'Tables'}>
            <table>
                <thead>
                    <tr style={{textAlign: "center"}}>
                        <th>ID</th>
                        <th>Описание</th>
                        <th>Исполнитель</th>
                        <th>Приоритет</th>
                    </tr>
                </thead>
                {tasks.map((val, key) => {
                    return (
                        <tbody>
                            <tr>
                                <td ref={test}>{val.id}</td>
                                <td>
                                    <label style={{textDecoration: "underline", color: "blue", cursor: "pointer"}}
                                           onClick={() => {
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
                    )
                })
                }
            </table>
            <Modal title={'Редактирование - Задача №' + id} btnType={'update'}
                   show={show} onClose = {() => setShow(false)} />
        </div>
    )
}

export default TableTasks
