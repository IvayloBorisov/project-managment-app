const Post = {
    author: ({ userId }, args, { AuthorModel }) => {
        return AuthorModel.findById(author => author.id === userId);
    }
}

module.exports = {
    Post
}