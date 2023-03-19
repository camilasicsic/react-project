import React from "react";
import CartIcon from "../../images/cart.png";
import "./cartWidget.css";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0));
  }, [cart]);

  return (
    <div className="cart-icon" onClick={() => navigate("/cart")}>
      <img className="cart-img" src={CartIcon} alt="cart icon" />
      <div className="amount-cart" id="amount-cart">
        {total}
      </div>
    </div>
  );
};

export default CartWidget;
