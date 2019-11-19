import React, { Component } from "react";

class Product extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props)
    return (
      <div className = "product-box">
        <h6>{this.props.inventoryObj.product_name}</h6>
        <h6>{this.props.inventoryObj.price}</h6>
        <img src={this.props.inventoryObj.img} height="150px" alt="" />
        <button className="delete" type="submit" onClick={() => this.props.deleteFn(this.props.inventoryObj.id)}>Delete</button>
        <button className="edit" type="submit" >Edit</button>
      </div>
    );
  }
}

export default Product;
