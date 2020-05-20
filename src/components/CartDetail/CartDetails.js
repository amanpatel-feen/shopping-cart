import React, { Component } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productData from "../data.json";
import "../CommonStyle.scss";
import "./CartDetail.scss";
export default class CartDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data };
  }

  render() {
    let removeProduct = this.props.removeProduct;
    let changeQty = this.props.changeQty;
    let ele = this.state.data.map(function (e, idx) {
      return (
        <>
          <div key={idx} className="pro-info">
            <img src={productData[e.productId - 1].img} alt="#"></img>
            <div className="details">
              <span>{productData[e.productId - 1].title}</span>
              <p>{productData[e.productId - 1].info}</p>
              <span className="pp">
                &#8377; {productData[e.productId - 1].price[e.productModel]}
              </span>
            </div>
            <div className="btns">
              <button
                onClick={() => {
                  removeProduct(idx);
                }}
              >
                <FontAwesomeIcon icon={faTrash} className="icon" />
              </button>
              <div className="qtys">
                <span>Quantity : {e.productCount}</span>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max="100"
                  className="quantity"
                />
                <button
                  onClick={() => {
                    changeQty(
                      e,
                      Number(document.getElementById("quantity").value)
                    );
                  }}
                  className="btn-add"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <button className="btn">Next</button>
          <button className="btn-light">Cancel</button>
        </>
      );
    });
    return (
      <>
        <div className="container">
          <div className="wrapper-cartDetails">
            <h2>Shopping Cart</h2>
            {ele}
          </div>
        </div>
      </>
    );
  }
}
