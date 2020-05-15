import React, { Component } from "react";

export default class Reviews extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h2>Reviews</h2>
          <ul className="review-list">
            <li>
              <div className="user-details">
                <img src={}></img>
                <div className="details">
                  <span>{name}</span>
                  <span>{date}</span>
                  <span>{rating}</span>
                </div>
              </div>
              <p>{review}</p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
