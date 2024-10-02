import logo from './logo.svg';
import './App.css';
import Button from './Modules/Button/Button';
import Input from './Modules/Category/Input';
import Field from './Modules/TextField/Field';
import Dropdown from './Modules/Dropdowns/Dropdown';
import Dropdown2 from './Modules/Dropdowns/Dropdown2';
import Header from './Modules/Header/Header';
import UserCard from './Modules/User/UserCard';
import Active from './Modules/UserList/Active';
import Page from './Modules/UserList/Page';
const user =
  {
    id:'1',
      name: 'КаменьЗол',
      company: 'HouseLTD',
      city: 'Новороссийск'
  }
function App() {
    return (
        <div className="App">
            {/* <Header/> */}
            <Button text={'Button'}/>
            <br/>
            <Input placeholder={'Name'}/><br/><br/>
            <Field placeholder={'some text'} label={'Какойто лебел'}/>
            <br/><br/>
            <UserCard user={user} arhiv={true}/><br/><br/>
            <Page/>

        </div>
    );
}

export default App;
