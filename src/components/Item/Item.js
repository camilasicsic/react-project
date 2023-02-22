import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ product }) => {
  const [amountToAdd, setAmountToAdd] = useState(1);

  const add = () => {
    if (amountToAdd < product.stock) {
      setAmountToAdd(amountToAdd + 1);
    }
  };

  const remove = () => {
    if (amountToAdd > 1) {
      setAmountToAdd(amountToAdd - 1);
    }
  };

  const addToCart = () => {
    setAmountToAdd(1);
  };

  return (
    <div
      className="product-card"
      onClick={() => console.log("redirije al detalle del producto")}
    >
      <div className="product-card-price">${product.price}</div>
      <Link to={`/item/${product.id}`}>
        <img
          className="product-image"
          src={`../../../../images/${product.image}`}
          alt="pic"
        />
      </Link>
      <div className="product-detail">
        <div className="cart-buttons">
          <button className="cart-button" onClick={remove}>
            -
          </button>
          <div className="amount">{amountToAdd}</div>
          <button className="cart-button" onClick={add}>
            +
          </button>
        </div>
        <div className="add-button-container">
          <button className="add-button" onClick={addToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
