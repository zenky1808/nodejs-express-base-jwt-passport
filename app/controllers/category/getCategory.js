
const { handleError } = require('../../middleware/utils')
const { findAllCategory } = require('./helpers')
const CategoryModel = require('../../models/category')

const getCategory = async (req, res) => {
    try {
        const dataResult = await findAllCategory(CategoryModel)
        console.log(dataResult);
        res.status(200).json({data: dataResult})
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getCategory }