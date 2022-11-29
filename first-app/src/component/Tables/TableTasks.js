import './Table.css'
import {useEffect, useState} from "react";
import Modal from "../Modal/ModalTaskCreate";
import getTasks from "../../rest/task/getTasks";
import {useDispatch, useSelector} from "react-redux";
import {setTasks} from "../../redux/store/taskSlice";

function TableTasks() {

    const dispatch = useDispatch()

    const dataTask = getTasks()

    useEffect(() => {
        dataTask.map((it) => {
            dispatch(setTasks(it))
        })
    }, [dataTask])

    const tasks = useSelector(state => state.tooltask.todos)

    const [show, setShow] = useState(false)

    return (
        <div className={'Tables'}>
            <table>
                <thead>
                    <tr style={{textAlign: "center"}}>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Исполнитель</th>
                        <th>Приоритет</th>
                    </tr>
                </thead>
                {tasks.map((val, key) => {
                    return (
                        <tbody key={key}>
                            <tr>
                                <td>{val.id}</td>
                                <td onClick={() => setShow(true)}>
                                    <label style={{textDecoration: "underline", color: "blue", cursor: "pointer"}}>
                                        {val.description}
                                    </label>

                                    <Modal title={'Редактирование - Задача №' + val.id} btnType={'update'}
                                                 show={show} onClose = {() => setShow(false)} />
                                </td>
                                <td>{val.fullNamePerson}</td>
                                <td>{val.priority}</td>
                            </tr>
                        </tbody>
                    )
                })
                }
            </table>
        </div>
    )
}

export default TableTasks