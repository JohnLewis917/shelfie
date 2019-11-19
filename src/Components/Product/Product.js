import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

class Product extends Component {
  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    const {id} = this.props 
    this.props.history.push(`/Edit/${id}`)
  }
  render() {
    // console.log(this.props)
    return (
      <div className = "product-box">
        <h6>{this.props.inventoryObj.product_name}</h6>
        <h6>{this.props.inventoryObj.price}</h6>
        <img src={this.props.inventoryObj.img} height="150px" alt="" />
        <button className="delete"  onClick={() => this.props.deleteFn(this.props.inventoryObj.id)}>Delete</button>
        <button className="edit"  onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}

export default withRouter(Product)
