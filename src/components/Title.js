import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="container">
      <div className="title">
        <h2 className="heading">{name}</h2>
        <p className="lead">{title}</p>
      </div>
    </div>
  );
}
