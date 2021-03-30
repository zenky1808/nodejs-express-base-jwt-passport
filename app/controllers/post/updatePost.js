const { matchedData } = require('express-validator')
const { handleError, isIDGood } = require('../../middleware/utils')
const { updateItem } = require('../../middleware/db')
const PostModel = require('../../models/post')

const updatePost = async (req, res) => {
    try {
        req = matchedData(req)
        const id = await isIDGood(req.id)
        let slug = req.title.split(" ").join("-")
        const data = {
            ... req,
            slug
        }
        await updateItem(id, PostModel, data)
        res.status(200).json({ msg: 'Update successfully'})
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { updatePost }