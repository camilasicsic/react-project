import { useParams } from "react-router-dom";
import { products } from "../ItemListContainer/products";
import "./itemdetail.css";

const ItemDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);

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
            <button className="card-button">-</button>
            <div className="amount-card">1</div>
            <button className="card-button">+</button>
          </div>
          <div className="add-button-detail-container">
            <button className="add-button-detail">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
