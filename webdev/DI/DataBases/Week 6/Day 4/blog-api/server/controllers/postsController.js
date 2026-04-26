const Posts = require('../models/postsModel');

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Posts.getAll();
        res.json(posts);
    } catch (err) {
        next(err);
    }
};

const getPost = async (req, res, next) => {
    try {
        const post = await Posts.getById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (err) {
        next(err);
    }
};

const createPost = async (req, res, next) => {
    try {
        const [post] = await Posts.create(req.body);
        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const [post] = await Posts.update(req.params.id, req.body);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (err) {
        next(err);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const deleted = await Posts.remove(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Post not found' });
        res.json({ message: 'Post deleted' });
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };
