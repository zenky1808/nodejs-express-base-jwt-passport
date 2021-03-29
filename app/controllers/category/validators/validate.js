const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

const validateCreateCategory = [
    check('title')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
    check('postIDs')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
    check('text_content')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    validateCreateCategory
}