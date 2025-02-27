const express = require('express');
const router = express.Router();
const { createBlogPost, editBlogPost } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createBlogPost);

router.put('/:id', protect, editBlogPost);

module.exports = router;
