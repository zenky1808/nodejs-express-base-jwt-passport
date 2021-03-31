const { buildErrObject } = require('../../../middleware/utils')

const searchPostDB = (model, searchWord, option) => {
    return new Promise((resolve, reject) => {
        const regex = new RegExp(searchWord, 'i')
        model.paginate(
            {
                title: regex
            },
            option,
            (err, item) => {
                if(err) {
                    return reject(buildErrObject(422, err.message))
                }
                resolve(item)
            }
        )
    })
}

module.exports = { searchPostDB }