import React from "react";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "../Products";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDetail from "../ProductDetail";
import Checkout from "../Checkout";

import "./Navbar.scss";
class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeProduct: null,
      cart:[],
    };
  }
  
  //Change the active product 
  changeProduct = (product) => {this.setState({activeProduct: product})}
  
  //Add the product to the cart
  addToCart = (product,model) => {
  	let found=false;
  	for(let i=0;i<this.state.cart.length;i++){
  		if(this.state.cart[i].productId===product.id){
  			this.state.cart[i].productCount+=1;
  			found=true;
  			break;
  		}
  	}
  	if(!found)
  		this.state.cart.push({productId: product.id, productModel:model, productCount: 1});
  		}
  		
   removeProduct = (idx) => {
    let tempCart = this.state.cart;
    tempCart.splice(idx, 1);
    this.setState({ cart:tempCart });
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
            <Products addToCart={this.addToCart} changeProduct={this.changeProduct}/>
          </Route>
          {this.state.activeProduct && (
            <Route exact path="/ProductDetail">
              <ProductDetail
                activeProduct={this.state.activeProduct}
                addToCart={this.addToCart}
              />
            </Route>
          )}
          <Route path="/checkout">
            <Checkout data={this.state.cart} removeProduct={this.removeProduct}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Navbar;
