const { itemNotFound } = require('../../../middleware/utils')

const findPostByID = (id, model) => {
    return new Promise((resolve, reject) => {
        model.findById(
            id,
            async (err, item) => {
                try {
                    await itemNotFound(err, item, 'NOT_FOUND_POST')
                    resolve(item)
                } catch (error) {
                    reject(error)
                }
            }
        )
        .populate(
            {
                path: 'author',
                select: 'name'
            }
        )
        .populate(
            {
                path: 'category',
                select: 'title text_content'
            }
        )
    })
}

module.exports = { findPostByID }