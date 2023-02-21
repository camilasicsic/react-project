import Item from "../Item/Item";
import "./itemListContainer.css";
import { products } from "./products";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const filteredProducts = categoryId
    ? products.filter((item) => item.category === categoryId)
    : products;

  return (
    <div className="item-list-container">
      {filteredProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
