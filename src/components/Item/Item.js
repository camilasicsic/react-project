import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ product }) => {
  return (
    <div
      className="product-card"
      onClick={() => console.log("redirije al detalle del producto")}
    >
      <Link to={`/item/${product.id}`}>
        <img
          className="product-image"
          src={`../../../../images/${product.image}`}
          alt="pic"
        />
      </Link>
      <div className="product-detail">
        <div className="detail-price">${product.price}</div>
        <div className="detail-name"> {product.name}</div>
      </div>
    </div>
  );
};

export default Item;
