const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const {
    validateCreateCategory
} = require('../controllers/category/validators')

const {
    createCategory
} = require('../controllers/category')

router.post(
  '/',
  requireAuth,
  trimRequest.all,
  validateCreateCategory,
  createCategory
)

module.exports = router