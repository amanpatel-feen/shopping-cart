import React, { Component } from "react";
import Product from "./Product";
import Reviews from "./Reviews";
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: this.props.product };
  }
  render() {
    return (
      <div>
        <Product product={this.state.product} />
        <Reviews reviewsData={this.state.product.reviews} />
      </div>
    );
  }
}
