import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    };

    getProduct();
  }, [id]);

  useEffect(() => {
    if (product && cartItems.some((item) => item.id === product.id)) {
      setIsAdded(true);
    }
  }, [product, cartItems]);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
  };

  if (loading) {
    return <p className="product-details__loading">Loading...</p>;
  }

  if (!product) {
    return <p className="product-details__error">Product not found.</p>;
  }

  return (
    <div className="product-details" id={`product-details-${product.id}`}>
      <img
        src={product.image}
        alt={product.title}
        className="product-details__image"
      />
      <div className="product-details__info">
        <h2 className="product-details__title">{product.title}</h2>
        <p className="product-details__category">
          Category: {product.category}
        </p>
        <p className="product-details__price">${product.price}</p>
        <p className="product-details__description">{product.description}</p>
        <button
          className={`product-details__add-to-cart ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
