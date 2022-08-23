const { Schema, model } = require('mongoose');

const AuthorSchema = new Schema({
    name: String,
    username: String,
    email: String,
    address: {
      street: String,
      city: String,
      zipcode: String,
    }
});

module.exports = model('Author', AuthorSchema);