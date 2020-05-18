import React, { Component } from "react";
import "./CommonStyle.scss";
import "./ShippingDetail.scss";

export default class ShippingDetails extends Component {
  render() {
    let temp = this.props.handler;
    return (
      <>
        <div className="container">
          <div className="wrapper-shipping">
            <h2>Shipping Details</h2>
            <form action="#">
              <input
                type="text"
                className="name"
                name="firstname"
                id="firstname"
              />
              <input
                type="text"
                className="name"
                name="lastname"
                id="lastname"
              />
              <br />
              <input type="text" name="address" id="address" />
              <br />
              <input type="text" name="address2" id="address2" />
              <br />
              <select>
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="Mexico">USA</option>
                <option value="Australia">Australia</option>
                <option value="Thailand">Thailand</option>
              </select>
              <input type="text" id="city" name="city" />
              <br />
              <input
                type="number"
                id="zip"
                name="zip"
                placeholder="Zip/Postal Code"
              />
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
              <div className="hr-line"></div>
              <div className="radios">
                <div className="free-shipping">
                  <input
                    type="radio"
                    name="shippingType"
                    onClick={function () {
                      temp(0);
                    }}
                  />
                  <div className="free">
                    <label for="free-shipping">
                      <p>Free Shipping</p>
                      <p class="delivery-type">between 2-5 working days</p>
                    </label>
                  </div>
                </div>
                <div className="next-day">
                  <input
                    type="radio"
                    name="shippingType"
                    onClick={function () {
                      temp(1);
                    }}
                  />
                  <div className="next">
                    <label for="next-day">
                      <p>Next Day Delivery - $20</p>
                      <p class="delivery-type">24 hours from checkout</p>
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <button className="btn">Next</button>
            <button className="btn-light">Cancel</button>
          </div>
        </div>
      </>
    );
  }
}
