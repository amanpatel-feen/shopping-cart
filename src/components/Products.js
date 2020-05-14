import React from "react";
// import Up from "../assets/Up.svg";
// import Down from '../assets/Down.svg';
import { storeProducts, detailProduct } from "../data";

import "./Products.scss";

import data from "./data.json";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  // console.log(prod);
  componentDidMount() {
    fetch(`./data.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data);
        data = data.map(function (e, idx) {
          return {
            title: e["title"],
            price: e["price"],
            info: e["info"],
            image: e["img"],
          };
        });
        this.setState({ data: data });
      });
  }

  filter = () => {
    let filter_txt = document.getElementById("search-box").value.toUpperCase();
    let blocks = document.getElementsByClassName("product-block");
    for (let i = 0; i < blocks.length; i++) {
      let name = blocks[i].innerText.split("\n")[0].toUpperCase();
      if (name.indexOf(filter_txt) > -1) blocks[i].style.display = "";
      else blocks[i].style.display = "none";
    }
  };

  render() {
    let ele = null;
    if (this.state.data) {
      ele = this.state.data.map(function (e, idx) {
        return (
          <div key={idx} className="product-block">
            <div className="container">
              <div className="wrapper">
                <div className="pro">
                  <div className="image">
                    <a
                      href="./product.js
                    "
                    >
                      <img
                        className="prod-img"
                        onClick={() => console.log("hello from image")}
                        id="product-flag"
                        src={e["img"]}
                        alt={e["title"]}
                        align="left"
                      />
                    </a>
                    <div class="button">
                      <a href="./cart.js"> BUTTON </a>
                    </div>
                  </div>

                  <div>
                    <h4 id="product-name">{e["title"]}</h4>

                    <span>{e["info"]}</span>
                    <span>{e["price"]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="container">
        <div className="product-container">
          <div className="search-box">
            <h1>Mobile E-commerce Shop</h1>
            <input
              type="text"
              id="search-box"
              onKeyUp={this.filter}
              placeholder="Search..."
            />
            <button>Submit</button>
          </div>
          <div className="products">
            <h2>Products Listing</h2>
            <p className="lead">
              loremloremloremloremloremloremloremloremloremloremloremloremlorem
            </p>
            <div className="product-wrapper">{ele}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
