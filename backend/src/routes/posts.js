import express from 'express';
import { body, validationResult } from 'express-validator';
import Post from '../models/Post.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// Create post
router.post(
  '/',
  authenticateToken,
  upload.single('image'),
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('content').trim().notEmpty().withMessage('Content is required'),
    body('category').isIn(['story', 'article', 'resource', 'news']).withMessage('Invalid category'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, content, category, published } = req.body;
      const image = req.file ? `/uploads/${req.file.filename}` : null;

      const post = new Post({
        title,
        content,
        category,
        author: req.user.id,
        image,
        published: published === 'true' || false,
      });

      await post.save();
      await post.populate('author', 'firstName lastName email');

      res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Get all posts
router.get('/', async (req, res) => {
  try {
    const { category, published } = req.query;
    let query = {};

    if (category) query.category = category;
    if (published !== undefined) query.published = published === 'true';

    const posts = await Post.find(query)
      .populate('author', 'firstName lastName email')
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'firstName lastName email')
      .populate('comments.user', 'firstName lastName email');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update post
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const { title, content, category, published } = req.body;

    if (title) post.title = title;
    if (content) post.content = content;
    if (category) post.category = category;
    if (published !== undefined) post.published = published;

    await post.save();
    await post.populate('author', 'firstName lastName email');

    res.json({ message: 'Post updated successfully', post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete post
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add comment
router.post('/:id/comments', authenticateToken, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: 'Comment text is required' });
    }

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.comments.push({
      user: req.user.id,
      text,
    });

    await post.save();
    await post.populate('comments.user', 'firstName lastName email');

    res.json({ message: 'Comment added successfully', post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
