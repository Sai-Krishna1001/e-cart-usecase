import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart" id="cart">
      <h2 className="cart__title">Your Cart</h2>
      {cartItems.length === 0 && (
        <p className="cart__empty-message">Your cart is empty.</p>
      )}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item" id={`cart-item-${item.id}`}>
          <img src={item.image} alt={item.title} className="cart-item__image" />
          <div className="cart-item__details">
            <h3 className="cart-item__title">{item.title}</h3>
            <p className="cart-item__price">Price: ${item.price}</p>
            <p className="cart-item__quantity">Quantity: {item.quantity}</p>
            <div className="cart-item__quantity-controls">
              <button
                className="cart-item__quantity-btn"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="cart-item__quantity-number">
                {item.quantity}
              </span>
              <button
                className="cart-item__quantity-btn"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="cart-item__remove"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="cart__total">
          Total: $
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Cart;
