const { createCategory } = require('./createCategory')
const { updateCategory } = require('./updateCategory')
const { deleteCategory } = require('./deleteCategory')
const { getCategory } = require('./getCategory')
const { getCategoryByID } = require('./getCategoryByID')

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getCategoryByID
}