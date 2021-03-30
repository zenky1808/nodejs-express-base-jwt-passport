const { buildErrObject } = require('../../../middleware/utils')

const findAllCategory = (model) => {
    return new Promise((resolve, reject) => {
        model.find(
            {},
            (err, item) => {
                if(err) {
                    reject(buildErrObject(422, err.message))
                }
                resolve(item)
            }
        )
    })
}

module.exports = { findAllCategory }