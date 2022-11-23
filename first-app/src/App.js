import './App.css';
import Header from "./Header/Header";
import ButtonAddPerson from "./Buttons/ButtonAddPerson";
// import MyTabs from "./Tabs/Tabs";
import TablePeople from "./Tables/TablePeople";
import TableTasks from "./Tables/TableTasks";

function App() {
  return (
      <div className={'App'}>
        <Header />
        <ButtonAddPerson />
        {/*<MyTabs />*/}
        <TablePeople />
        <TableTasks />
      </div>
  );
}

export default App;
