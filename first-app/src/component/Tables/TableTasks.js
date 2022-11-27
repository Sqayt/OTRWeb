import './Table.css'
import Tasks from "../../rest/task/tasksGet";
import {useState} from "react";
import ModalCreate from "../Modal/Modal";
import Body from "../Body/BodyTaskCreate";

function TableTasks() {

    const tasks = Tasks()
    const [show, setShow] = useState(false)

    return (
        <div className={'Tables'}>
            <table>
                <thead>
                    <tr>
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
                                    <label style={{textDecoration: "underline", color: "blue", cursor: "pointer"}}>{val.description}</label>
                                    <ModalCreate title={'Редактирование - Задача №' + val.id} btnType={'update'} body={Body()}
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