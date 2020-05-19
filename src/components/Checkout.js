import React, { Component } from "react";
import { NavLink, BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import ShoppingcartCard from "./ShoppingcartCard";
import "./Checkout.scss";
import Navbar from "./Navbar/Navbar";
import PaymentMethodCard from "./PaymentMethodCard";
import ShippingDetailCard from "./ShippingDetailCard";
export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
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
              />
            </Route>
            <Route exact path="/ship">
              <ShippingDetailCard data={this.props.data} />
            </Route>
            <Route exact path="/pay">
              <PaymentMethodCard data={this.props.data} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
