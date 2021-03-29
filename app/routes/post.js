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
  validateGetPost
} = require('../controllers/post/validators')

const {
  createPost,
  getAllPost,
  getPost,
  deletePost
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

// Get Post by ID
router.get(
  '/:id',
  requireAuth,
  trimRequest.all,
  validateGetPost,
  getPost
)

module.exports = router