const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const { createItem } = require('../../middleware/db')
const CategoryModel = require('../../models/category')

const createCategory = async (req, res) => {
    try {
        req = matchedData(req)
        const dataResult = await createItem(req, CategoryModel)
        res.status(200).json('Create successfully')
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { createCategory }