import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../ItemListContainer/products";
import "./itemdetail.css";

const ItemDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);

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
    <div className="detail-card-container">
      <div className="item-detail-card">
        <img
          className="product-detail-image"
          src={`../../../../images/${product.image}`}
          alt="pic"
        />
        <div className="card-detail">
          <div className="card-name"> {product.name} </div>
          <div className="product-price">${product.price} </div>
          <div className="card-buttons">
            <button className="card-button" onClick={remove}>
              -
            </button>
            <div className="amount-card">{amountToAdd}</div>
            <button className="card-button" onClick={add}>
              +
            </button>
          </div>
          <div className="add-button-detail-container">
            <button className="add-button-detail" onClick={addToCart}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
