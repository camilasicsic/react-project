import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);

  const totalPriceInCart = () => {
    let totalCart = 0;
    for (const cartItem of cart) {
      totalCart += cartItem.price * cartItem.quantity;
    }
    return totalCart;
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">CARRITO</h2>
      <div>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className="cart-checkout">
        {cart.length > 0 && (
          <button onClick={clear} className="clear-cart-button">
            Vaciar carrito
          </button>
        )}
        <div className="cart-total">${totalPriceInCart()} </div>
      </div>
    </div>
  );
};

export default Cart;
