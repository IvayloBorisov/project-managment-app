const Author = {
    posts: ({ id }, args, { PostModel }) => {
        return PostModel.findById(id);
    }
}

module.exports = {
    Author
}