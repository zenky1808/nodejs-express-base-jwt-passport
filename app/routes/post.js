const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const {
  validatePost,
  validateGetPost,
  validateUpdatePost,
  validateSearchPost
} = require('../controllers/post/validators')

const {
  createPost,
  getAllPost,
  getPost,
  deletePost,
  updatePost,
  searchPost
} = require('../controllers/post')

router.post(
  '/',
  requireAuth,
  trimRequest.all,
  validatePost,
  createPost
)

// Get all Post
router.get(
  '/',
  requireAuth,
  trimRequest.all,
  getAllPost
)

// Search Post
router.get(
  '/search',
  requireAuth,
  trimRequest.all,
  validateSearchPost,
  searchPost
)

// Get Post by ID
router.get(
  '/:id',
  requireAuth,
  trimRequest.all,
  validateGetPost,
  getPost
)

// Update Post
router.put(
  '/:id',
  requireAuth,
  trimRequest.all,
  validateUpdatePost,
  updatePost
)

// Delete post
router.delete(
  '/:id',
  requireAuth,
  trimRequest.all,
  validateGetPost,
  deletePost
)


module.exports = router