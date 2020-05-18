import React, { Component } from "react";
import data from "./data.json";

import "./CommonStyle.scss";
import "./Product.scss";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.product = this.props.product;
  }
  render() {
    let temp = this.props.handler;
    return (
      <>
        <div className="container">
          <div className="prod-detail">
            <div className="img">
              <img src={this.product.img}></img>
            </div>

            <div className="info">
              <h2>{this.product.title}</h2>
              <div className="hr-line"></div>
              <span>Price: &#8377; {this.product.price}</span>
              <select>
                <option>Select Model</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div className="hr-line"></div>
              <p>{this.product.info1}</p>
              <div className="hr-line-small"></div>
              <button
                className="btn"
                onClick={() => {
                  temp(this.product, 1, 0);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
