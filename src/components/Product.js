import React, { Component } from "react";
import data from "./data.json";

import "./CommonStyle.scss";
import "./Product.scss";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state={activeModel:0};
    this.product = this.props.product;
  }
  changeModel = (val)=>{
  	console.log(val);
  	this.setState({activeModel:val});
  };
  render() {
    let addToCart = this.props.addToCart;
    let changeModel = this.changeModel;
    let models = this.product.models.map((e,idx)=>{return (<option key={idx} value={idx} onClick={()=>{changeModel(idx)}}>{e}</option>)});
    return (
      <>
        <div className="container">
          <div className="prod-detail">
            <div className="img">
              <img src={this.product.img}></img>
            </div>

            <div className="info">
              <h2>{this.product.title}</h2>
              <div className="hr-line"></div>
              <span>Price: &#8377; {this.product.price[this.state.activeModel]}</span>
              <select>
                {models}
              </select>
              <div className="hr-line"></div>
              <p>{this.product.info1}</p>
              <div className="hr-line-small"></div>
              <button
                className="btn"
                onClick={() => {
                  addToCart(this.product,this.state.activeModel);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
