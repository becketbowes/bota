import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartItem from "./components/CartItem";

export default function StripeApp() {
  return (
    <div>
      <h1>Cart</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/cart">Cart</Link> | <Link to="/cartitems">CartItem</Link>
      </nav>
    </div>
  );
}
