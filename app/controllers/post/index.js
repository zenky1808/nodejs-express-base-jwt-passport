const { createPost } = require('./createPost')
const { getAllPost} = require('./getAllPost')
const { deletePost} = require('./deletePost')
const { getPost } = require('./getPost')



module.exports = {
    createPost,
    getAllPost,
    getPost,
    deletePost
}