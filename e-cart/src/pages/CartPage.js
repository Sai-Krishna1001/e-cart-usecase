import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/CartPage.css"; // Optional: Import your CSS for styling

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleIncrease = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  return (
    <div className="cart-page">
      <h2 className="cart-page__title">Your Cart</h2>
      {cartItems.length === 0 && (
        <p className="cart-page__empty-message">Your cart is empty.</p>
      )}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-page__item">
          <div className="cart-page__item-image">
            <img
              src={item.image}
              alt={item.title}
              className="cart-page__item-img"
            />
          </div>
          <div className="cart-page__item-details">
            <h3 className="cart-page__item-title">{item.title}</h3>
            <p className="cart-page__item-price">Price: ${item.price}</p>
          </div>
          <div className="cart-page__item-actions">
            <button
              className="cart-page__item-action"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
            <div className="cart-page__quantity">
              <button
                className="cart-page__quantity-btn"
                onClick={() => handleDecrease(item.id, item.quantity)}
              >
                -
              </button>
              <span className="cart-page__quantity-text">{item.quantity}</span>
              <button
                className="cart-page__quantity-btn"
                onClick={() => handleIncrease(item.id, item.quantity)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="cart-page__total">
          Total: $
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </div>
      )}
      {/* Add checkout button or further actions here */}
    </div>
  );
};

export default CartPage;
