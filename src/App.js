import logo from './logo.svg';
import './App.css';

import Header from './Modules/Header/Header';

import UsersPage from './Modules/UserList/UsersPage';
import UserPage from './Modules/UserPage/UserPage';

import React, { Component } from 'react';

import {Route, Routes} from "react-router-dom";
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
