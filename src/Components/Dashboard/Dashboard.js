import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.inventory.map(el => (
          <Product key={el.id} inventoryObj={el} />
        ))}
      </div>
    );
  }
}

export default Dashboard;
