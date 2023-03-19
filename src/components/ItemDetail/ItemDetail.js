import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../ItemListContainer/products";
import "./itemdetail.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  console.log(product);

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
            <button
              className="add-button-detail"
              onClick={() => navigate("/cart")}
            >
              Finalizar compra
            </button>
            <button
              className="add-button-detail"
              onClick={() => {
                addItem(product, amountToAdd);
                setAmountToAdd(1);
              }}
            >
              Agregar al carrito
            </button>
            <button className="add-button-detail" onClick={() => navigate("/")}>
              Seguir comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
