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
    return (
      <>
        <div className="container">
          <div className="prod-detail">
            <div className="img">
              <img src={this.product.img}></img>
            </div>

            <div className="info">
              <h2>{this.product.title}</h2>
              <span>$ {this.product.price}</span>
              <select>
                <option>Select Model</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>

              <p>{this.product.info}</p>

              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
