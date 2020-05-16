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
            <span>SUBTOTAL 1234</span>
            <span>SHIPPING free</span>
            <span>TAXES 14$</span>
            {/* class for horizontal line */}
            <span>TOTAL 1234</span>
          </div>
        </div>
      </>
    );
  }
}
