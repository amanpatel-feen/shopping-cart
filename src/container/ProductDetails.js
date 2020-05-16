import React, { Component } from "react";
import Product from "../components/Product";
import Review from "../components/Reviews";
export default class ProductDetails extends Component {
  render() {
    return (
      <div>
        <Product />
        <Review />
      </div>
    );
  }
}
