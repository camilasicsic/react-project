import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../ItemListContainer/products";
import "./itemdetail.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getDoc } from "firebase/firestore";
import { getItem } from "../../services/ItemService";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { getAmountInCart } = useContext(CartContext);
  const { addItem } = useContext(CartContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [stock, setStock] = useState(0);
  console.log("stock", stock);

  useEffect(() => {
    setLoading(true);
    getDoc(getItem(id)).then((doc) => {
      const prod = { id: doc.id, ...doc.data() };
      setProduct(doc.exists() ? prod : null);
      setStock(prod.stock - getAmountInCart(prod.id))
      console.log("prod.stock", prod.stock)
      console.log("amountin", getAmountInCart(prod.id))
      setLoading(false);
    });
  }, [id]);

  const [amountToAdd, setAmountToAdd] = useState(1);

  const add = () => {
    if (amountToAdd < stock) {
      setAmountToAdd(amountToAdd + 1);
    }
  };

  const remove = () => {
    if (amountToAdd > 1) {
      setAmountToAdd(amountToAdd - 1);
    }
  };

  if (loading) {
    return <p>Loading item... </p>;
  }

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
            {
              stock === 0 ? 'No hay mas stock para este producto' : <>
                <button className="card-button" onClick={remove}>
                  -
                </button>
                <div className="amount-card">{amountToAdd}</div>
                <button className="card-button" onClick={add}>
                  +
                </button>
              </>
            }

          </div>
          <div className="add-button-detail-container">
            <button
              className="add-button-detail"
              onClick={() => navigate("/cart")}
            >
              Finalizar compra
            </button>
            {
              stock > 0 &&
              <button
                className="add-button-detail"
                onClick={() => {
                  addItem(product, amountToAdd);
                  setStock(stock - amountToAdd);
                  setAmountToAdd(1);
                }}
              >
                Agregar al carrito
              </button>
            }

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
