const { matchedData } = require('express-validator')
const { handleError, isIDGood } = require('../../middleware/utils')
const { findPostByID } = require('./helpers')
const PostModel = require('../../models/post')

const getPost = async (req, res) => {
    try {
        req = matchedData(req)
        const id = await isIDGood(req.id)
        const dataResult = await findPostByID(id, PostModel)
        res.status(200).json({data: dataResult})
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getPost }