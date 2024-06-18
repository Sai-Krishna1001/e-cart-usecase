import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(
    cartItems.some((item) => item.id === product.id)
  );

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <Link to={`/products/${product.id}`} className="product-card__link">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
        <div className="product-card__info">
          <h3 className="product-card__title">{product.title}</h3>
          <p className="product-card__price">${product.price}</p>
        </div>
      </Link>
      <button
        className={`product-card__add-to-cart ${isAdded ? "added" : ""}`}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
