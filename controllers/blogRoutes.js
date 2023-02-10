const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    if (!newBlog) {
      res.status(400).json({ message: 'Failed to create new blog post' });
      return;
    }

    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blog = await Blog.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blog) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    const BlogData = await blog.destroy();

    res.status(200).json({ message: 'Blog post deleted', data: BlogData });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;
