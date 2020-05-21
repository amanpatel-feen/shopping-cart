import React, { Component } from "react";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import ShoppingcartCard from "../ShoppingcartCard/ShoppingcartCard";
import "./Checkout.scss";
import PaymentMethodCard from "../Pymentmethodcard/PaymentMethodCard";
import ShippingDetailCard from "../ShippingdetailCard/ShippingDetailCard";
export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data, discount: 0 };
    this.couponCodes = [
      { code: "extra50", discount: 50 },
      { code: "firsttime", discount: 40 },
      { code: "dhamaka30", discount: 30 },
    ];
  }

  applyDiscount = (code) => {
    let found = false;
    for (let offer of this.couponCodes) {
      if (offer.code === code) {
        this.setState({ discount: offer.discount });
        found = true;
        break;
      }
    }
    if (!found) alert("Invalid coupon code");
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="subnav-wrapper">
            <ul className="sub-navbar">
              <li>
                <NavLink to="/checkout">1.Shopping Cart</NavLink>
              </li>
              <li>
                <NavLink to="/ship">2.Shipping Details</NavLink>
              </li>
              <li>
                <NavLink to="/pay">3.Payment Option</NavLink>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/checkout">
              <ShoppingcartCard
                removeProduct={this.props.removeProduct}
                data={this.props.data}
                changeQty={this.props.changeQty}
                applyDiscount={this.applyDiscount}
                discount={this.state.discount}
              />
            </Route>
            <Route exact path="/ship">
              <ShippingDetailCard
                data={this.props.data}
                discount={this.state.discount}
              />
            </Route>
            <Route exact path="/pay">
              <PaymentMethodCard
                data={this.props.data}
                discount={this.state.discount}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
