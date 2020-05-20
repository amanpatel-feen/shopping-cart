import React, { Component } from "react";
import Product from "../../components/Product/Product";
import Reviews from "../../components/Review/Reviews";
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: this.props.activeProduct };
  }
  render() {
    return (
      <div className="wrapper-productDetail">
        <Product
          product={this.state.product}
          addToCart={this.props.addToCart}
        />
        <Reviews reviewsData={this.state.product.reviews} />
      </div>
    );
  }
}
