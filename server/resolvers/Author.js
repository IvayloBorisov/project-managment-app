const Author = {
    posts: ({ id }, args, { PostModel }) => {
        return PostModel.findById(post => post.userId === id);
    }
}

module.exports = {
    Author
}