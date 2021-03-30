const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const {
    validateCreateCategory,
    validateUpdateCategory,
    validateDeleteCategory,
    validateGetCategory
} = require('../controllers/category/validators')

const {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getCategoryByID
} = require('../controllers/category')

// Create Category
router.post(
  '/',
  requireAuth,
  trimRequest.all,
  validateCreateCategory,
  createCategory
)

// Update Category
router.put(
  '/:id',
  requireAuth,
  trimRequest.all,
  validateUpdateCategory,
  updateCategory
)

// Delete Category
router.delete(
  '/:id',
  requireAuth,
  trimRequest.all,
  validateDeleteCategory,
  deleteCategory
)

//Get All Category
router.get(
  '/',
  requireAuth,
  trimRequest.all,
  getCategory
)

//Get Category by ID
router.get(
  '/:id',
  requireAuth,
  trimRequest.all,
  validateGetCategory,
  getCategoryByID
)
module.exports = router