const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const { protect, admin } = require('../middleware/authMiddleware');

//user read all & read one
router.get('/', getProducts);

router.get('/:id', getProductById);

// admin create, update, delete
router.post('/', protect, admin, createProduct);

router.put('/:id', protect, admin, updateProduct);

router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
