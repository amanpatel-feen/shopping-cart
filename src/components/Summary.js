import React, { Component } from "react";

export default class Summary extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <h3>Summary</h3>
            <input type="text" placeholder="Enter Coupon Code"></input>
            {/*class for horizontal line */}
            <span>SUBTOTAL {total_price_without_tax}</span>
            <span>SHIPPING {shipping_fee}</span>
            <span>TAXES {tax}</span>
            {/* class for horizontal line */}
            <span>TOTAL {total_price}</span>
          </div>
        </div>
      </>
    );
  }
}
