const { buildErrObject } = require('../../../middleware/utils')

const getAllPostFromDB = (model) => {
    return new Promise((resolve, reject) => {
        model.find(
            {},
            (err, item) => {
                if(err) {
                    return reject(buildErrObject(422, err.message))
                }
                resolve(item)
            }
        )
        .populate(
            { 
                path: 'author',
                select: 'name'
            }
        )
        // .populate(
        //     {
        //         path: 'category',
        //         select: 'title text_content'
        //     }
        // )
    })
}

module.exports = { getAllPostFromDB }