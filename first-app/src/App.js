import './App.css';
import Header from "./component/Header/Header";
import ButtonAddPerson from "./component/Buttons/ButtonAddPerson";
import MyTabs from "./component/Tabs/Tabs";

function App() {
  return (
      <div className={'App'}>
        <Header />
        <MyTabs />
      </div>
  );
}

export default App;
