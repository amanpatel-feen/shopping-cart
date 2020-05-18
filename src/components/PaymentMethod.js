import React, { Component } from "react";
import "./CommonStyle.scss";
import "./PaymentMethod.scss";

export default class PaymentMethod extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper-paymentMethod">
            <h2>Payment method</h2>
            <div className="hr-line"></div>
            <div className="cardDetails">
              <div className="cardType">
                <input type="radio" name="creditcard" />
                <label for="card">
                  <span>Credit Card</span>
                  <span>lorem</span>
                </label>
              </div>
              <div className="card-number">
                <input
                  class="inputCard"
                  type="number"
                  min="1000"
                  max="9999"
                  name="creditCard1"
                  id="creditCard1"
                  required
                />

                <input
                  class="inputCard1"
                  name="expiry"
                  id="expiry"
                  type="month"
                  required
                />
                <input
                  type="number"
                  className="cv"
                  name="cvv"
                  id="cvv"
                  required
                />
              </div>
              <input type="text" placeholder="Card Holder Name"></input>
            </div>
            <div className="paypal">
              <input type="radio" name="paypal" />
              <label for="paypal">
                <span>Paypal</span>
                <span>lorem</span>
              </label>
            </div>

            <button className="btn">Pay Now</button>
            <button className="btn-light">Cancel</button>
          </div>
        </div>
      </>
    );
  }
}
