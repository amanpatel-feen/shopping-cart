import React, { Component } from "react";
import PaymentMethod from "./PaymentMethod";
import SubSummary from "./SubSummary";
import "./CommonStyle.scss";
import "./PaymentMethodCard.scss";
export default class ShippingDetailCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="payment-wrapper">
            <PaymentMethod />
            <SubSummary data={this.props.data} />
          </div>
        </div>
      </>
    );
  }
}
