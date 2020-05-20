import React, { Component } from "react";
import productData from "../data";
import "./SubSummary.scss";
import "../CommonStyle.scss";
export default class SubSummary extends Component {
  constructor(props) {
    super(props);
    this.shippingFee = this.props.shippingType ? 20 : 0;
    this.tax = 10;
  }
  calculateTotal = (items) => {
    let totalSum = 0;
    items.forEach((e) => {
      let price = productData[e.productId - 1].price[e.productModel];
      price *= e.productCount;
      totalSum += price;
    });
    this.shippingFee = this.props.shippingType ? 20 : 0;
    return totalSum;
  };
  render() {
    let ele1 = this.props.data.map(function (e, idx) {
      return (
        <div className="product-summary">
          <div className="p-img">
            <img src={productData[e.productId - 1].img} alt="#" />
          </div>

          <div className="img-detail">
            <p>{productData[e.productId - 1].title}</p>
            <p className="price">
              &#8377; {productData[e.productId - 1].price[e.productModel]}
            </p>
          </div>
        </div>
      );
    });
    this.subTotal = this.calculateTotal(this.props.data);
    console.log(this.subTotal);
    return (
      <>
        <div className="container">
          <div className="wrapper-subsummary">
            <h2>Summary</h2>
            {ele1}

            <div className="coupons">
              <div className="hr-line-small"></div>
              <div className="voucher">
                {/*class for horizontal line */}
                <select>
                  <option>HAVE A VOUCHER</option>
                  <option>HAVE A VOUCHER</option>
                  <option>HAVE A VOUCHER</option>
                </select>
              </div>
              <div className="hr-line-small"></div>
              <div className="price-summary">
                <span>SUBTOTAL</span>
                <span className="money"> {this.subTotal}</span>
                <br />
                <span>SHIPPING </span>
                <span className="money">{this.shippingFee}</span>
                <br />
                <span>TAXES </span>
                <span className="money">{this.tax}</span>
                <br />
                <div className="hr-line-small"></div>
                <span>TOTAL</span>
                <span className="money">
                  {this.subTotal +
                    this.subTotal * (this.tax / 100) +
                    this.shippingFee}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
