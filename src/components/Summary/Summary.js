import React, { Component } from "react";
import productData from "../data.json";
import "../CommonStyle.scss";
import "./Summary.scss";

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.shippingFee = this.props.data.length ? 10 : 0;
    this.tax = 10;
  }
  calculateTotal = (items) => {
    let totalSum = 0;
    items.forEach((e) => {
      let price = productData[e.productId - 1].price[e.productModel];
      console.log(price);
      price *= e.productCount;
      totalSum += price;
    });

    this.shippingFee = this.props.data.length ? 20 : 0;
    return totalSum;
  };
  render() {
    this.subTotal = this.calculateTotal(this.props.data);
    console.log(this.subTotal);
    return (
      <>
        <div className="container">
          <div className="wrapper-summary">
            <h2>Summary</h2>
            <div className="hr-line-small"></div>
            <input type="text" placeholder="Enter Coupon Code"></input>
            <div className="hr-line-small"></div>
            <p>
              SUBTOTAL
              <span className="cost"> {this.subTotal}</span>
            </p>
            <p>
              SHIPPING
              <span className="cost">{this.shippingFee}</span>
            </p>
            <p>
              TAXES
              <span className="cost"> {this.tax}%</span>
            </p>

            <div className="hr-line-small"></div>
            <p>
              TOTAL{" "}
              <span>
                {this.subTotal +
                  this.subTotal * (this.tax / 100) +
                  this.shippingFee}
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
