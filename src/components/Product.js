import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="prod-detail">
            <div className="img">
              <img src="#"></img>
            </div>

            <div className="info">
              <h2>Title</h2>
              <span>price</span>
              <select>
                <option></option>
                <option></option>
                <option></option>
              </select>

              <p>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsum
              </p>

              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
