const { handleError } = require('../../middleware/utils')
const { getAllPostFromDB } = require('./helpers')
const PostModel = require('../../models/post')


const getAllPost = async (req, res) => {
    try {
        const options = {
            page: req.query.page || 1,
            limit: req.query.limit || 5
        }
        const data = await getAllPostFromDB(PostModel, options)
        res.status(200).json({data: data})
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllPost }