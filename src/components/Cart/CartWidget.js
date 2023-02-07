import React from "react";
import CartIcon from "../../images/cart.png";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <a className="cart-icon" href="./cart.html">
      <img className="cart-img" src={CartIcon} alt="cart icon" />
      <div className="amount-cart" id="amount-cart">
        0
      </div>
    </a>
  );
};

export default CartWidget;
