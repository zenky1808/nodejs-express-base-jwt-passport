const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PostSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            required: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        text_content: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

PostSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Post', PostSchema)