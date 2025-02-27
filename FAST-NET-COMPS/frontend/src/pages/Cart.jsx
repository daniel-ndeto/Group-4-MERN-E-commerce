import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const token = localStorage.getItem('token');

  const fetchCart = async () => {
    try {
      const res = await axios.get('/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch cart');
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      await axios.post('/cart/remove', { productId }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchCart();
    } catch (error) {
      console.error(error);
      alert('Failed to remove product');
    }
  };

  const handleUpdate = async (productId, newQuantity) => {
    try {
      await axios.post('/cart/update', { productId, quantity: newQuantity }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchCart();
    } catch (error) {
      console.error(error);
      alert('Failed to update quantity');
    }
  };

  return (
    <div style={{ padding: '16px' }}>

      <h2>Your Cart</h2>
      {cart && cart.items && cart.items.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Product</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Quantity</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {cart.items.map((item) => (
              <tr key={item._id}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  {item.product.name}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <input 
                    type="number" 
                    value={item.quantity} 
                    min="1"
                    onChange={(e) => handleUpdate(item.product._id, parseInt(e.target.value))}
                  />
                </td>

                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <button onClick={() => handleRemove(item.product._id)}>Remove</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
