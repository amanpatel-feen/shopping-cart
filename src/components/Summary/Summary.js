import React, { Component } from "react";
import productData from "../data.json";
import "../CommonStyle.scss";
import "./Summary.scss";

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.shippingFee = this.props.data.length ? 20 : 0;
    this.tax = 20;
  }
  calculateTotal = (items) => {
    let totalSum = 0;
    items.forEach((e) => {
      let price = productData[e.productId - 1].price[e.productModel];
      console.log(price);
      price *= e.productCount;
      totalSum += price;
    });

    this.shippingFee = 0;
    return totalSum;
  };
  render() {
    this.subTotal = this.calculateTotal(this.props.data);
    let applyDiscount = this.props.applyDiscount;
    return (
      <>
        <div className="container">
          <div className="wrapper-summary">
            <h3>Summary</h3>
            <div className="hr-line-small"></div>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              id="couponcode"
            />
            <button
              onClick={() => {
                applyDiscount(document.getElementById("couponcode").value);
              }}
            >
              Apply
            </button>
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
            <p>
              Discount
              <span className="cost"> {this.props.discount}</span>
            </p>

            <div className="hr-line-small"></div>
            <p>
              TOTAL{" "}
              <span>
                {Math.round(
                  Math.max(
                    this.subTotal +
                      this.subTotal * (this.tax / 100) +
                      this.shippingFee -
                      this.props.discount,
                    0
                  )
                )}
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
