import React, {useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import './Tabs.css'
import TablePeople from "../Tables/TablePeople";
import TableTasks from "../Tables/TableTasks";
import ButtonAddTask from "../Buttons/ButtonAddTask";
import ButtonAddPerson from "../Buttons/ButtonAddPerson";

function MyTabs() {
    const tablePeople = TablePeople()
    const tableTasks = TableTasks()

    const buttonAddTask = ButtonAddTask()
    const buttonAddPerson = ButtonAddPerson()

    const [index, setIndex] = useState(0)

    return (
        <div>
            <Tabs className={'mainTabs'}>
                <div style={{display: "flex"}}>
                    <TabList className={'tabHead'}>
                        <Tab className={'myTab'}>Сотрудники</Tab>
                        <Tab className={'myTab'}>Задачи</Tab>
                    </TabList>

                    {buttonAddTask}
                </div>

                <TabPanel>
                    {tablePeople}
                </TabPanel>
                <TabPanel>
                    {tableTasks}
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default MyTabs