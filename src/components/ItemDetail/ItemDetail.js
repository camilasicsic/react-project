import { products } from "../ItemListContainer/products";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="detail-card-container">
      <div className="item-detail-card">
        <img
          className="product-detail-image"
          src={`../../../../images/makeup1.png`}
          alt="pic"
        />
        <div className="card-detail">
          <div className="card-name">Gloss Fenty Beauty</div>
          <div className="product-price">$1500</div>
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
