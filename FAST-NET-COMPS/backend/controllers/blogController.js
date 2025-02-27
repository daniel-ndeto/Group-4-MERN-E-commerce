const BlogPost = require('../models/BlogPost');

exports.createBlogPost = async (req, res) => {
  try {
    const blogPost = new BlogPost({ ...req.body, author: req.user.id });
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
