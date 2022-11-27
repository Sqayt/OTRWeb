import './Table.css'
import PeopleGet from "../../rest/person/peopleGet";
import {useState} from "react";
import ModalCreate from "../Modal/Modal";
import Body from "../Body/BodyPersonUpdate";

function TablePeople() {

    const people = PeopleGet()
    const [show, setShow] = useState(false);

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
                                <td onClick={() => setShow(true)}>
                                    <div style={{textDecoration: "underline", color: "blue", cursor: "pointer"}}>
                                        {val.name} {val.surName} {val.middleName}
                                    </div>
                                    <ModalCreate title={'Редактирование - Сотрудник №' + val.id} btnType={'update'} show={show}
                                                 body={Body()} onClose = {() => setShow(false)} />
                                </td>
                                <td>{val.directorFullName}</td>
                                <td>{val.branchName}</td>
                                <td>{val.tasks.length}</td>
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