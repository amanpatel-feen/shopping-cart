import React, { Component } from "react";
import Product from "./Product";
import Reviews from "./Reviews";
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: this.props.activeProduct };
  }
  render() {
    return (
      <div className="wrapper-productDetail">
        <Product product={this.state.product} addToCart={this.props.addToCart} />
        <Reviews reviewsData={this.state.product.reviews} />
      </div>
    );
  }
}
