const { matchedData } = require('express-validator')
const { handleError, isIDGood } = require('../../middleware/utils')
const { getItem } = require('../../middleware/db')
const CategoryModel = require('../../models/category')

const getCategoryByID = async (req, res) => {
    try {
        req = matchedData(req)
        const id = await isIDGood(req.id)
        const dataResult = await getItem(id, CategoryModel)
        res.status(200).json({ data: dataResult})
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getCategoryByID }