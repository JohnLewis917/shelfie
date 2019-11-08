import React, {Component} from 'react';
// import {Component} from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import { SSL_OP_CIPHER_SERVER_PREFERENCE } from 'constants';



class App extends Component {
  constructor(){
    super()
      this.state = {
        inventory: [{
          name: "shoes",
          price: "$20",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYqZINGXqegKr0P9uIVn0M_z9OJdu0JGZHFrAYsJfoovOguU8HQ&s",
        },
        {
          name: "pants",
          price: "$40",
          image: "data:image/jpeg;base64,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",
        },
        {
          name: "shirts",
          price: "$30",
          image: "data:image/jpeg;base64,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",
        }]
      }
      
    
  }
  render(){
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} />
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
