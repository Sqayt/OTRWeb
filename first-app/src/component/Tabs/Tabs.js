import React from 'react';
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

    return (
        <Tabs style={{textAlign: "left"}}>
            <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
                {buttonAddPerson}
                {tablePeople}
            </TabPanel>
            <TabPanel>
                {buttonAddTask}
                {tableTasks}
            </TabPanel>
        </Tabs>
    )
}

export default MyTabs