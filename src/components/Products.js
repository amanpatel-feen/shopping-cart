import React from "react";
// import Up from "../assets/Up.svg";
// import Down from '../assets/Down.svg';
// import "./CountryCard.css";
import { storeProducts, detailProduct } from "../data";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  // console.log(prod);
  componentDidMount() {
    fetch("./data.json")
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
            <div className="blocks">
              <div>
                <img
                  className="prod-img"
                  id="product-flag"
                  src={e["img"]}
                  alt={e["title"]}
                  align="left"
                />
                <h4 id="product-name">{e["title"]}</h4>
                <div>
                  <span>{e["title"]}</span>
                  <span>{e["info"]}</span>
                  <span>{e["price"]}</span>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="product-container">
        <center>
          <input
            type="text"
            id="search-box"
            onKeyUp={this.filter}
            placeholder="Search..."
          />
        </center>
        <br />
        {ele}
      </div>
    );
  }
}
export default Product;
