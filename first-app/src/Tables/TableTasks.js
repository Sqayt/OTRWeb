import './Table.css'
import Tasks from "../Data/Task";

function TableTasks() {

    const tasks = Tasks()

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
                                <td>{val.description}</td>
                                <td></td>
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