import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar.jsx';
import Login from './views/login';
import Crud from './views/Crud';
import Crudcontainer from './components/Crud-container';
import ReactDOM from "react-dom";
import Test from './components/Test'

import Table from "../src/components/Table";


function App() {
  return (
    <Switch>
      <Route exact path="/login">
       <Login></Login> 
       </Route>
       <Route exact path="/Crud">
        <Crud></Crud> 
       </Route>
       <Route exact path="/SideBar">
        <SideBar/>
       </Route>
       <Route exact path="/Crudcontainer">
        <Crudcontainer/>
       </Route>
       <Route exact path="/Test">
        <Test/>
       </Route>
       <Route exact path="/Table">
        <Table/>
       </Route>
     </Switch>
     

    
  );
}

export default App;
