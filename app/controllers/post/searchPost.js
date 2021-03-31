const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const { searchPostDB } = require('./helpers')
const PostModel = require('../../models/post')


const searchPost = async (req, res) => {
    try {
        // req = matchedData(req)
        const searchWord = req.query.searchWord
        const options = {
            page: req.query.page || 1,
            limit: req.query.limit || 3
        }
        const dataResult = await searchPostDB(PostModel, searchWord, options)
        // console.log(dataResult);
        res.status(200).json({data: dataResult})
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { searchPost }