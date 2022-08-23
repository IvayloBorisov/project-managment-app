const { Schema, model } = require('mongoose');

const PostSchema = new Schema({

    title: String,
    body: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }

});

module.exports = model('Post', PostSchema);