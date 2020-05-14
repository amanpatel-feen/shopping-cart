import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
const ProductInfo = React.createContext();

class ProductList extends Component {
  state = { prod: storeProducts, detailProduct: detailProduct };

  handleDetail = () => {
    console.log("detail");
  };
  addToCart = () => {
    console.log("cart");
  };
  render() {
    return (
      <ProductInfo.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductInfo.Provider>
    );
  }
}

const ProductConsumer = ProductInfo.Consumer;

export { ProductList, ProductConsumer };
