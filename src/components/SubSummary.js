import React, { Component } from "react";

export default class SubSummary extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <h3>Summary</h3>
            <div className="product-summary">
              <img></img>
              <span>PRODUCT NAME</span>
              <span>$ 300</span>
            </div>
            {/*class for horizontal line */}
            <div className="voucher">
              {/*class for horizontal line */}
              <select>
                <option>HAVE A VOUCHER</option>
                <option>HAVE A VOUCHER</option>
                <option>HAVE A VOUCHER</option>
              </select>
            </div>
            {/*class for horizontal line */}
            <div className="price-summary">
              <span>SUBTOTAL 1234</span>
              <span>SHIPPING free</span>
              <span>TAXES 14$</span>
              {/* class for horizontal line */}
              <span>TOTAL 1234</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
