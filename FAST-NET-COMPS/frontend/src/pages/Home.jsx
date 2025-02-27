import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>

        <h1>Welcome to FAST-NET-COMPS</h1>

        <p>Your one-stop shop for phones & laptops!</p>
      </section>

      <div className="container">

        <h2>Our Products</h2>

        <div className={styles.productsGrid}>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Home;
