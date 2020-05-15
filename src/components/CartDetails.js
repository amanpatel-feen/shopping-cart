import React, { Component } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CartDetails extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper-cartDetails">
            <h3>Shopping Cart</h3>
            <div className="pro-info">
              <img src={}></img>
              <div className="details">
                <span>{Product_name}</span>
                <span>{info}</span>
                <span>${price}</span>
              </div>
              <button>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <select>
                <option selected>1pc</option>
                <option>2pc</option>
                <option>3pc</option>
              </select>
            </div>
            <button>Next</button>
            <button>Cancel</button>
          </div>
        </div>
      </>
    );
  }
}
