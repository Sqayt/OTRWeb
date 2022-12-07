import './Table.css'
import {useState} from "react";
import {useSelector} from "react-redux";
import Modal from "../Modal/ModalPersonUpdate";
import TablePersonHeader from "./TableHead/TablePeopleHeader";
import setDataPeople from "../../redux/logic/setDataPeople";
import setDataTask from "../../redux/logic/setDataTask";

function TablePeople() {

    setDataPeople()

    const [show, setShow] = useState(false);
    const people = useSelector(state => state.toolPerson.todos);
    const [id, setId] = useState(0);

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
                                        {val.surName} {val.name}  {val.middleName}
                                    </label>
                                </td>
                                <td>{val.directorFullName}</td>
                                <td>{val.branchName}</td>
                                <td>{val.countTask}</td>
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