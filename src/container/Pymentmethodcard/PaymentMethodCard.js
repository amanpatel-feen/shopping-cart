import React, { Component } from "react";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import SubSummary from "../../components/SubSummary/SubSummary";
import "../../components/CommonStyle.scss";
import "./PaymentMethodCard.scss";
export default class ShippingDetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = { shippingType: 0 };
  }
  handler = (val) => {
    this.setState({ shippingType: val });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="payment-wrapper">
            <PaymentMethod />
            <SubSummary
              data={this.props.data}
              shippingType={this.state.shippingType}
              discount={this.props.discount}
            />
          </div>
        </div>
      </>
    );
  }
}
