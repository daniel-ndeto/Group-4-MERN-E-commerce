import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  // Product list state
  const [products, setProducts] = useState([]);

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    stock: 0,
    image: '',
  });

  // Editing product ID state
  const [editingProductId, setEditingProductId] = useState(null);

  const token = localStorage.getItem('token');

  // GET products function
  const fetchProducts = async () => {
    try {
      const res = await axios.get('/products', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (err) {
      console.error('Fetch products error:', err.response?.data || err.message);
      alert(`Failed to fetch products: ${err.response?.data?.message || err.message}`);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []); 

  // Handle create or update product
  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      if (editingProductId) {
        // Update existing product
        await axios.put(`/products/${editingProductId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Create new product
        await axios.post('/products', formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      // Reset form and state
      setFormData({ name: '', description: '', price: 0, category: '', stock: 0, image: '' });
      setEditingProductId(null);
      fetchProducts();
    } catch (err) {
      console.error('Create/Update product error:', err.response?.data || err.message);
      alert(`Operation failed: ${err.response?.data?.message || err.message}`);
    }
  };

  // Populate form for editing an existing product
  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setFormData({
      name: product.name,
      description: product.description || '',
      price: product.price,
      category: product.category?._id || '',
      stock: product.stock || 0,
      image: product.image || '',
    });
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts();
    } catch (err) {
      console.error('Delete product error:', err.response?.data || err.message);
      alert(`Delete failed: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Admin Dashboard</h2>
      <p className={styles.subtitle}>Welcome, admin! From here you can manage the platform.</p>

      {/* Form Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>
          {editingProductId ? 'Edit Product' : 'Create Product'}
        </h3>
        <form onSubmit={handleCreateOrUpdate}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name:</label>
            <input
              className={styles.formInput}
              type="text"
              value={formData.name}
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Description:</label>
            <textarea
              className={styles.formTextarea}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Price:</label>
              <input
                className={styles.formInput}
                type="number"
                value={formData.price}
                required
                onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Category (ID):</label>
              <input
                className={styles.formInput}
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Stock:</label>
              <input
                className={styles.formInput}
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: +e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Image URL:</label>
              <input
                className={styles.formInput}
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            {editingProductId ? 'Update Product' : 'Create Product'}
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className={styles.tableSection}>
        <h3 className={styles.sectionTitle}>Existing Products</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Stock</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod._id} className={styles.tr}>
                <td className={styles.td}>{prod.name}</td>
                <td className={styles.td}>${prod.price}</td>
                <td className={styles.td}>{prod.stock}</td>
                <td className={styles.td}>{prod.category?.name || 'No Category'}</td>
                <td className={styles.td}>
                  <button onClick={() => handleEdit(prod)} className={styles.editButton}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(prod._id)} className={styles.deleteButton}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className={styles.emptyRow}>
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
