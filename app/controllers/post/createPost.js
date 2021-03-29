const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const { createItem } = require('../../middleware/db')
const PostModel = require('../../models/post')

const createPost = async (req, res) => {
    try {
        req = matchedData(req)
        let slug = req.title.split(" ").join("-")
        const data = {
            ... req,
            slug
        }
        const dataResult = await createItem(data, PostModel);
        res.status(200).json({data: dataResult})
    } catch (error) {
        handleError(res, error)
    }
}


module.exports = {
    createPost
}