import './App.css';
import Header from "./Header/Header";
import ButtonAddPerson from "./Buttons/ButtonAddPerson";
// import MyTabs from "./Tabs/Tabs";
import TablePeople from "./Tables/TablePeople";
import TableTasks from "./Tables/TableTasks";
import Body from "./Body/Body";

function App() {
  return (
      <div className={'App'}>
        <Header />
        <ButtonAddPerson />
        {/*<MyTabs />*/}
        <TablePeople />
        <TableTasks />
        <Body />
      </div>
  );
}

export default App;
