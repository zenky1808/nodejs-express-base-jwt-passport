const { createPost } = require('./createPost')
const { getAllPost} = require('./getAllPost')
const { deletePost} = require('./deletePost')
const { getPost } = require('./getPost')
const { updatePost } = require('./updatePost')
const { searchPost } = require('./searchPost')

module.exports = {
    createPost,
    getAllPost,
    getPost,
    deletePost,
    updatePost,
    searchPost
}