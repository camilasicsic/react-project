import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartItem.css";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="cart-item">
      <img
        className="cart-item-img"
        src={`../../../../../images/${product.image}`}
        alt="pic"
      />
      <h3 className="cart-item-quantity">{product.quantity}</h3>
      <h3>{product.name}</h3>
      <h3 className="cart-item-price"> ${product.price}</h3>
      <button
        className="cart-item-remove"
        onClick={() => removeItem(product.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
