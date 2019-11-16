import React, { Component } from "react";
// import {Component} from 'react';
import axios from "axios";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }
  componentDidMount(){
    this.getInventory()
  }
  getInventory(){
    axios.get('/api/App')
    .then(res => {
        console.log(res.data)
        this.setState({
            inventory: res.data
        })
        console.log(res.data)
        
    })
 }
  render() {
    return (
      <div className="App">
        <Header />
        
          <Dashboard inventory={this.state.inventory}/>
    
        <Form />
      </div>
    );
  }
}

export default App;
