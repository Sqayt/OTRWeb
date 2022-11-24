import './Table.css'
import People from "../../Data/People";

function TablePeople() {
    const people = People()
    return (
        <div className={'Tables'}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ФИО</th>
                        <th>Руководитель</th>
                        <th>Филиал</th>
                        <th>Количество задач</th>
                    </tr>
                </thead>
                {people.map((val, key) => {
                    return (
                        <tbody key={key}>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name} {val.surName} {val.middleName}</td>
                                <td></td>
                                <td>{val.branchName}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    )
                }
                )}
            </table>
        </div>
    )
}

export default TablePeople