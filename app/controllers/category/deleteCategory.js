const { matchedData } = require('express-validator')
const { handleError, isIDGood } = require('../../middleware/utils')
const { deleteItem } = require('../../middleware/db')
const CategoryModel = require('../../models/category')

const deleteCategory = async (req, res) => {
    try {
        req = matchedData(req)
        const id = await isIDGood(req.id)
        await deleteItem(id, CategoryModel)
        res.status(200).json({ msg: 'Delete successfully' })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { deleteCategory }