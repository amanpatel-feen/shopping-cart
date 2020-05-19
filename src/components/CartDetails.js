import React, { Component } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productData from "./data.json";
import Summary from "./Summary";
import "./CommonStyle.scss";
import "./CartDetail.scss";
export default class CartDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
  }
 
  render() {
    let removeProduct = this.props.removeProduct;
    let ele = this.state.data.map(function (e, idx) {
      return (
        <div key={idx} className="pro-info">
          <img src={productData[e.productId - 1].img} alt="#"></img>
          <div className="details">
            <span>{productData[e.productId - 1].title}</span>
            <p>{productData[e.productId - 1].info}</p>
            <span>&#8377; {productData[e.productId - 1].price[e.productModel]}</span>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                removeProduct(idx);
              }}
            >
              <FontAwesomeIcon icon={faTrash} className="icon" />
            </button>
           	<span>Quantity : {e.productCount}</span>
          </div>
        </div>
      );
    });
    return (
      <>
        <div className="container">
          <div className="wrapper-cartDetails">
            <h2>Shopping Cart</h2>
            {ele}
            <button className="btn">Next</button>
            <button className="btn-light">Cancel</button>
          </div>
        </div>
      </>
    );
  }
}
