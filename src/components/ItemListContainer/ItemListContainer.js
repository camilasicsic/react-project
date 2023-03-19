import Item from "../Item/Item";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems } from "../../services/ItemService";
import { getDocs } from "firebase/firestore";



const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const query = getItems(categoryId);
    getDocs(query).then((querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {loading ? <p>Loading Items...</p> :
        products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ItemListContainer;
