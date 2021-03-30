const { matchedData } = require('express-validator')
const { handleError, isIDGood } = require('../../middleware/utils')
const { updateItem } = require('../../middleware/db')
const CategoryModel = require('../../models/category')

const updateCategory = async (req, res) => {
    try {
        req = matchedData(req)
        const id = await isIDGood(req.id)
        await updateItem(id, CategoryModel, req)
        res.status(200).json({ msg: 'Update successfully' })
    } catch (error) {
        handleError(res, error)
    }
}


module.exports = { updateCategory }