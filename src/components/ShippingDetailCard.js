import React, { Component } from "react";
import ShippingDetails from "./ShippingDetails";
import SubSummary from "./SubSummary";

export default class ShippingDetailCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="ShippingDetailCard-wrapper">
            <ShippingDetails />
            <SubSummary />
          </div>
        </div>
      </>
    );
  }
}
