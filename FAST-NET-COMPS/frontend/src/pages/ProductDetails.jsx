import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.post('/cart/add', {
        productId: product._id,
        quantity: quantity,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Product added to cart!');

    } catch (error) {
      console.error('Add to cart error:', error.response?.data || error.message);
      alert(`Failed to add product to cart: ${error.response?.data?.message || error.message}`);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
      </div>

      <div className={styles.detailsContainer}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <div className={styles.cartActions}>

          <label htmlFor="quantity">Quantity:</label>

          <input 
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className={styles.quantityInput}
          />

          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
