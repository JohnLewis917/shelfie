import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'


class App extends Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/Form' component={Form}/>
         </Switch>
        
      </div>
    );
  }
}

export default App;
