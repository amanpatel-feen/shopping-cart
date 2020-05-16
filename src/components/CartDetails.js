import React, { Component } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productData from "./data.json";
import Summary from "./Summary";
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
          <img src={productData[e.productId - 1].img}></img>
          <div className="details">
            <span>{productData[e.productId - 1].title}</span>
            <span>{productData[e.productId - 1].info}</span>
            <span>{productData[e.productId - 1].price}</span>
          </div>
          <button
            onClick={() => {
              temp(idx);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <select>
            <option selected>1pc</option>
            <option>2pc</option>
            <option>3pc</option>
          </select>
        </div>
      );
    });
    return (
      <>
        <div className="container">
          <div className="wrapper-cartDetails">
            <h3>Shopping Cart</h3>
            {ele}
            <button>Next</button>
            <button>Cancel</button>
          </div>
          <Summary data={this.state.data} />
        </div>
      </>
    );
  }
}
