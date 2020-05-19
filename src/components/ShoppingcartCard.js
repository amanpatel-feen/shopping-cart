import React, { Component } from "react";
import CartDetails from "./CartDetails";
import Summary from "./Summary";

import "./ShoppingcartCard.scss";

export default class ShoppingcartCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="cart-wrapper">
            <CartDetails removeProduct={this.props.removeProduct} data={this.props.data} />
            <Summary data={this.props.data} />
          </div>
        </div>
      </>
    );
  }
}
