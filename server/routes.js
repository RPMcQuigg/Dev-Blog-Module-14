// server/routes.js

const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');

// User authentication routes
router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/logout', userController.logout);

// Blog post routes
router.post('/post', postController.createPost);
router.put('/post/:id', postController.updatePost);
router.delete('/post/:id', postController.deletePost);

// Comment routes
router.post('/comment', commentController.createComment);
router.put('/comment/:id', commentController.updateComment);
router.delete('/comment/:id', commentController.deleteComment);

module.exports = router;
