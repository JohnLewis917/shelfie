import React, {Component} from 'react';
// import {Component} from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';



class App extends Component() {
  constructor(){
    super(
      this.state = {
        inventory: []
      }
      
    )
  }
  render(){
    return (
      <div className="App">
        <Dashboard/>
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
