import React from "react";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "../Products";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDetail from "../ProductDetail";
import Checkout from "../Checkout";

import "./Navbar.scss";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProduct: null,
    };
    this.cart = [];
  }
  handler = (val, addToCart) => {
    if (addToCart) this.cart.push({ productId: val.id, itemCount: 1 });
    else this.setState({ activeProduct: val });
  };
  render() {
    return (
      <BrowserRouter>
        <nav className="nav">
          <div className="container">
            <div className="nav-wrapper">
              <ul className="right">
                <li>
                  <NavLink to="/">Home </NavLink>
                  <span className="line">|</span>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                  <span className="line">|</span>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                  <span className="line">|</span>
                </li>
                <li>
                  <NavLink to="/help">Help</NavLink>
                </li>
                <li>
                  <NavLink to="/checkout">
                    <button className="btn">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      Your Cart
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Products handler={this.handler} />
          </Route>
          {this.state.activeProduct && (
            <Route exact path="/ProductDetail">
              <ProductDetail
                product={this.state.activeProduct}
                handler={this.handler}
              />
            </Route>
          )}
          <Route path="/checkout">
            <Checkout data={this.cart} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Navbar;
