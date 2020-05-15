import React, { Component } from "react";

export default class PaymentMethod extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <div className="cardDetails">
              <input type="radio" name="creditcard" />
              <label for="card">
                <span>Credit Card</span>
                <span>lorem</span>
              </label>
              <input
                class="inputCard"
                type="number"
                min="1000"
                max="9999"
                name="creditCard1"
                id="creditCard1"
                required
              />
              -
              <input
                class="inputCard"
                type="number"
                min="1000"
                max="9999"
                name="creditCard2"
                id="creditCard2"
                required
              />
              -
              <input
                class="inputCard"
                type="number"
                min="1000"
                max="9999"
                name="creditCard3"
                id="creditCard3"
                required
              />
              -
              <input
                class="inputCard"
                type="number"
                min="1000"
                max="9999"
                name="creditCard4"
                id="creditCard4"
                required
              />
              <input
                class="inputCard"
                name="expiry"
                id="expiry"
                type="month"
                required
              />
              <input type="number" name="cvv" id="cvv" required />
              <input type="text" placeholder="Card Holder Name"></input>
            </div>
            <div className="paypal">
              <input type="radio" name="paypal" />
              <label for="paypal">
                <span>Paypal</span>
                <span>lorem</span>
              </label>
            </div>

            <button>Pay Now</button>
            <button>Cancel</button>
          </div>
        </div>
      </>
    );
  }
}
