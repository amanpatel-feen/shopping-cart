import React, { Component } from "react";
import CartDetails from "./CartDetails";
import Summary from "./Summary";

import "./ShoppingcartCard.scss";

export default class ShoppingcartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProduct: null,
    };
    this.cart = [];
  }
  handler = (val, addToCart) => {
    if (addToCart) this.cart.push({ productId: val.id, itemCount: 1 });
    else this.setState({ activeProduct: val });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="cart-wrapper">
            <CartDetails />
            <Summary />
          </div>
        </div>
      </>
    );
  }
}
