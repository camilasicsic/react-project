import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { updateStock } from "../../services/ItemService";
import { addOrder } from "../../services/OrderService";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [success, setSuccess] = useState();
  const [buying, setBuying] = useState();
  const { cart, clear } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const emptyText = success ? "La compra fue realizada con exito!" : "No hay items en el carrito. Agrega algunos items y vuelve a comprar."

  const totalPriceInCart = () => {
    let totalCart = 0;
    for (const cartItem of cart) {
      totalCart += cartItem.price * cartItem.quantity;
    }
    return totalCart;
  };

  const handleOrder = () => {
    setBuying(true);
    addOrder(cart, user)
      .then(async (res) => {
        await updateStock(cart);
        setSuccess(true);
        clear();
      })
      .catch((err) => {
        setSuccess(false);
        setBuying(false);
      })
      .finally(() => {
        setBuying(false);
      });
  }



  return (
    <div className="cart-container">
      <h2 className="cart-title">CARRITO</h2>
      <div>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      {cart.length > 0 ? (
        <div className="cart-checkout">

          <>
            <button onClick={clear} className="clear-cart-button">
              Vaciar carrito
            </button>
            <button onClick={handleOrder} className="clear-cart-button">
              {buying ? "Finalizando compra..." : "Finalizar compra"}
            </button>
            <div className="cart-total">${totalPriceInCart()} </div>
          </>
        </div>
      ) :
        <h3>{emptyText}</h3>}
    </div>
  );
};

export default Cart;
