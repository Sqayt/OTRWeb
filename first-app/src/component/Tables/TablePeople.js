import './Table.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import getPeople from "../../rest/person/getPeople";
import {setPeople} from "../../redux/store/personSlice";
import Modal from "../Modal/ModalPersonUpdate";
import TablePersonHeader from "./TableHead/TablePeopleHeader";

function TablePeople() {

    const dispatch = useDispatch()

    const persons = getPeople()

    useEffect(() => {
        persons.map((it) => {
            dispatch(setPeople(it))
        })
    }, [persons])

    const people = useSelector(state => state.toolPerson.todos)

    const [show, setShow] = useState(false);
    const [id, setId] = useState(0)

    return (
        <div className={'Tables'}>
            <table>

                <TablePersonHeader />

                {people.map((val, key) => {
                    return (
                        <tbody key={key}>
                            <tr>
                                <td id={val.id}>{val.id}</td>
                                <td>
                                    <label className={'hyper-word'} onClick={() => {
                                                setId(val.id)
                                                setShow(true)
                                            }}>
                                        {val.name} {val.surName} {val.middleName}
                                    </label>
                                </td>
                                <td>{val.directorFullName}</td>
                                <td>{val.branchName}</td>
                                <td>{val.tasks.length}</td>
                            </tr>
                        </tbody>
                    )}
                )}
            </table>

            <Modal title={'Редактирование - Сотрудник №' + id} btnType={'update'}
                   show={show} id={id} onClose = {() => setShow(false)} />

        </div>
    )
}

export default TablePeople