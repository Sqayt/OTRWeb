import './Table.css'
import {useEffect, useState} from "react";
import Modal from '../Modal/ModalPersonUpdate'
import {useDispatch, useSelector} from "react-redux";
import getPeople from "../../rest/person/getPeople";
import {setPeople} from "../../redux/store/personSlice";

function TablePeople() {

    const dispatch = useDispatch()

    const persons = getPeople()

    useEffect(() => {
        persons.map((it) => {
            dispatch(setPeople(it))
        })
    }, [persons])

    const people = useSelector(state => state.toolkit.todos)

    const [show, setShow] = useState(false);

    return (
        <div className={'Tables'}>
            <table>
                <thead>
                    <tr style={{textAlign: "center"}}>
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
                                    <Modal title={'Редактирование - Сотрудник №' + val.id} btnType={'update'}
                                           show={show} onClose = {() => setShow(false)} />
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