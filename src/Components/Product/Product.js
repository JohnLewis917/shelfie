import React, { Component } from "react";

class Product extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className = "product-box">
        <h6>{this.props.inventoryObj.product_name}</h6>
        <h6>{this.props.inventoryObj.price}</h6>
        <img src={this.props.inventoryObj.img} height="150px" alt="" />
      </div>
    );
  }
}

export default Product;
