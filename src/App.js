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
import UsersPage from './Modules/UserList/UsersPage';
import UserPage from './Modules/UserPage/UserPage';
import ModalSave from './Modules/Modal/ModalSave';

import React, { Component } from 'react';

import { createRoot, HashRouter, Route, Routes, Link} from "react-router-dom";
import UserForm from './Modules/UserPage/UserForm';
const user =
  {
    id:'1',
      name: 'КаменьЗол',
      company: 'HouseLTD',
      city: 'Новороссийск'
  }
  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    render() {
      return (
        <div className="App">
        <Header user={user}/>
        <Routes>
          <Route path='/' element ={<UsersPage />}></Route>
          <Route path='/user/:username' element={<UserPage/>}></Route>
        </Routes>
      </div> 
      );
    }
  }

export default App;
