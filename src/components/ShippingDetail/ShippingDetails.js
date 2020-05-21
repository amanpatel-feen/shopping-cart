import React, { Component } from "react";
import "../CommonStyle.scss";
import "./ShippingDetail.scss";

export default class ShippingDetails extends Component {
  consoleDetails = () => {
    let form = document.getElementById("shipform");
    let data = Array.from(form.querySelectorAll("input, select")).map((e) => {
      let key = e.getAttribute("name");
      if (key === "shippingType") return [e.value, e.checked];
      return [e.name, e.value];
    });
    data.forEach((e) => {
      if (e[0] === "Free Shipping" || e[0] === "Paid Shipping") {
        if (e[1] === true) console.log(`Shipping Type : ${e[0]}`);
      } else console.log(`${e[0]} : ${e[1]}`);
    });
  };

  render() {
    let temp = this.props.handler;
    return (
      <>
        <div className="container">
          <div className="wrapper-shipping">
            <h2>Shipping Details</h2>
            <form
              action="#"
              id="shipform"
              onSubmit={(e) => {
                this.consoleDetails();
                e.preventDefault();
              }}
            >
              <input
                type="text"
                className="name"
                name="firstname"
                id="firstname"
                required
              />
              <input
                type="text"
                className="name"
                name="lastname"
                id="lastname"
                required
              />
              <br />
              <input type="text" name="address" id="address" />
              <br />
              <input type="text" name="address2" id="address2" />
              <br />
              <select name="country">
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
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
                    value="Free Shipping"
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
                    value="Paid Shipping"
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
              <button type="submit" className="btn">
                Next
              </button>
              <button className="btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
