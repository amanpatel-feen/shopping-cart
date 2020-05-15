import React, { Component } from "react";

export default class ShippingDetails extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper-shipping">
            <form action="#">
              <input type="text" name="firstname" id="firstname" />
              <input type="text" name="lastname" id="lastname" />
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
              <input type="text" id="city" name="city"></input>
              <br />
              <input
                type="number"
                id="zip"
                name="zip"
                placeholder="Zip/Postal Code"
              ></input>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              ></input>

              <div className="free-shipping">
                <input type="radio">
                  <label for="free-shipping">
                    <span>Free Shipping</span>
                    <span>between 2-5 working days</span>
                  </label>
                </input>
              </div>
              <div className="next-day">
                <input type="radio">
                  <label for="next-day">
                    <span>Next Day Delivery - $20</span>
                    <span>24 hours from checkout</span>
                  </label>
                </input>
              </div>
              <button>Next</button>
              <button>Cancel</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
