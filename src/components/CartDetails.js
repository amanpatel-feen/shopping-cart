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
    this.removeItem = this.removeItem.bind(this);
  }
  removeItem = (idx) => {
    let tempList = this.state.data;
    tempList.splice(idx, 1);
    this.setState({ data: tempList });
  };
  render() {
    let temp = this.removeItem;
    let ele = this.state.data.map(function (e, idx) {
      return (
        <div key={idx} className="pro-info">
          <img src={productData[e.productId - 1].img} alt="#"></img>
          <div className="details">
            <span>{productData[e.productId - 1].title}</span>
            <p>{productData[e.productId - 1].info}</p>
            <span>&#8377; {productData[e.productId - 1].price}</span>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                temp(idx);
              }}
            >
              <FontAwesomeIcon icon={faTrash} className="icon" />
            </button>
            <select>
              <option selected>1pc</option>
              <option>2pc</option>
              <option>3pc</option>
            </select>
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
