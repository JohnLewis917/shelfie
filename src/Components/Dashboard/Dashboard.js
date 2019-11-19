import React, { Component } from "react";
import Product from "../Product/Product";
import Form from '../Form/Form'
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      currentlySelected: {
        product_name: "",
        price: 0,
        img: ""
      }
    }
  }

  componentDidMount(){
    this.getInventory()
  }
  getInventory(){
    axios.get('/api/Dashboard')
    .then(res => {
        console.log(res.data)
        this.setState({
            inventory: res.data
        })
        console.log(res.data)
        
    })
 }
 deleteProduct = (id) => {
    axios.delete(`/api/Dashboard/${id}`)
    .then(() => {
      this.getInventory()
    })
 }

  render() {
    return (
      <div>
        {this.state.inventory.map(el => (
          <Product key={el.id} inventoryObj={el} deleteFn={this.deleteProduct}/>
        ))}
        
          <Form key = {this.state.currentlySelected.id} currentObj={this.state.currentlySelected} />

        
        
      </div>
    );
  }
}

export default Dashboard;
