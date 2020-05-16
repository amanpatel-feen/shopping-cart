import React, { Component } from "react";
import PaymentMethod from "./PaymentMethod";
import SubSummary from "./SubSummary";
export default class ShippingDetailCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="payment-wrapper">
            <PaymentMethod />
            <SubSummary />
          </div>
        </div>
      </>
    );
  }
}
