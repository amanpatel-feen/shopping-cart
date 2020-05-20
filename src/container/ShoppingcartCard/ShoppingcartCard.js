import React, { Component } from "react";
import CartDetails from "../../components/CartDetail/CartDetails";
import Summary from "../../components/Summary/Summary";

import "./ShoppingcartCard.scss";

export default class ShoppingcartCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="cart-wrapper">
            <CartDetails
              removeProduct={this.props.removeProduct}
              data={this.props.data}
              changeQty={this.props.changeQty}
            />
            <Summary data={this.props.data} />
          </div>
        </div>
      </>
    );
  }
}
