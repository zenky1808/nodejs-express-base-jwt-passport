const { handleError } = require('../../middleware/utils')
const { getAllPostFromDB } = require('./helpers')
const PostModel = require('../../models/post')


const getAllPost = async (req, res) => {
    try {
        const data = await getAllPostFromDB(PostModel)
        res.status(200).json({data: data})
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAllPost }