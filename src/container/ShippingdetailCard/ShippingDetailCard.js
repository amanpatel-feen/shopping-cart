import React, { Component } from "react";
import ShippingDetails from "../../components/ShippingDetail/ShippingDetails";
import SubSummary from "../../components/SubSummary/SubSummary";
import "./ShippingDetailCard.scss";
import "../../components/CommonStyle.scss";

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
          <div className="ShippingDetailCard-wrapper">
            <ShippingDetails handler={this.handler} />
            <SubSummary
              data={this.props.data}
              shippingType={this.state.shippingType}
            />
          </div>
        </div>
      </>
    );
  }
}
