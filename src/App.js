import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products";

import "./App.scss";
import ShippingDetailCard from "./components/PaymentMethodCard";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
