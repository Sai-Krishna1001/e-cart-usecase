import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api";
import "../styles/ProductPage.css"; // Optional: Import your CSS for styling

const ProductPage = () => {
  const { id } = useParams(); // Accessing the id parameter from the URL
  const [product, setProduct] = useState(null); // State to hold product details

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id); // Fetch product data by id
      setProduct(data); // Set product state with fetched data
    };

    getProduct();
  }, [id]); // Fetch product whenever id changes

  if (!product) {
    return <p>Loading...</p>; // Optional: Add a loading state while fetching data
  }

  return (
    <div className="product-page">
      <div className="product-page__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-page__details">
        <h2 className="product-page__title">{product.title}</h2>
        <p className="product-page__category">Category: {product.category}</p>
        <p className="product-page__price">Price: ${product.price}</p>
        <p className="product-page__description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
