const { getAllPostFromDB } = require('./getAllPostFromDB')
const { findPostByID } = require('./findPostByID')
const { searchPostDB } = require('./searchPostDB')
module.exports = { 
    getAllPostFromDB,
    findPostByID,
    searchPostDB
}