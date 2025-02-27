// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>FAST-NET-COMPS</div>

      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li> 
        <li><Link to="/cart">Cart</Link></li>
      </ul>

    </nav>
  );
};

export default Navbar;
