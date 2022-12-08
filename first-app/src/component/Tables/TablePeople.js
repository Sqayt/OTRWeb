import './Table.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../Modal/ModalPersonUpdate";
import TablePersonHeader from "./TableHead/TablePeopleHeader";
import axios from "axios";
import {apiUrl} from "../../rest/person/configPerson";
import {setPeople} from "../../redux/store/personSlice";

function TablePeople() {
    const dispatch = useDispatch()

    const [id, setId] = useState(0);
    const [show, setShow] = useState(false);

    const people = useSelector(state => state.toolPerson.todos);

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((resp) => {
                if (resp.status !== 200) {
                    console.log('Не успешное получение данных, ответ ' + resp.status + ', ошибка:\n');
                    throw new Error();
                }
                let dataPeople = resp.data;

                dispatch(setPeople(dataPeople));
            })
            .catch(e => console.log(e));
    }, [show]);

    if (people.length !== 0) {
        return (
            <div className={'Tables'}>
                <table>
                    <TablePersonHeader/>

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
                                            {val.surName} {val.name} {val.middleName}
                                        </label>
                                    </td>
                                    <td>{val.directorFullName}</td>
                                    <td>{val.branchName}</td>
                                    <td>{val.countTask}</td>
                                </tr>
                                </tbody>
                            )
                        }
                    )}
                </table>

                <Modal title={'Редактирование - Сотрудник №' + id} btnType={'update'}
                       show={show} id={id} onClose={() => setShow(false)}/>

            </div>
        )
    } else {
        return (
            <h3>Нет подключения к серверу!</h3>
        )
    }
}

export default TablePeople