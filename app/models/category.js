const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        postIDs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        ],
        text_content: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

CategorySchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Category', CategorySchema)