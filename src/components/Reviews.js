import React, { Component } from "react";
import "./Review.scss";

import "./CommonStyle.scss";
export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.reviewsData,
    };
  }
  render() {
    let ele = this.state.data.map(function (e) {
      return (
        <>
          <li>
            <div className="user-details">
              <img src="https://via.placeholder.com/160x160.png"></img>
              <div className="details">
                <span>{e.review}</span>
                <span>{e.rating}</span>
                <span>asdasd</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ab soluta dolorum totam nemo, corporis cumque non
                molestias ducimus explicabo sit quidem suscipit est facilis quam
                maxime atque libero dolor.
              </p>
            </div>
            <div className="hr-line-small"></div>
          </li>
        </>
      );
    });
    return (
      <>
        <div className="container">
          <div className="wrapper-review">
            <h2>Reviews</h2>
            <ul className="review-list">{ele}</ul>
          </div>
        </div>
      </>
    );
  }
}
