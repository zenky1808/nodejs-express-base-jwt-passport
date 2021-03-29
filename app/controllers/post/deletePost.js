const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const { createItem } = require('../../middleware/db')
const PostModel = require('../../models/post')


const deletePost = async (req, res) => {
    try {
        res.send('deletePost')
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { deletePost }