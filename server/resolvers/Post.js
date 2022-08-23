const Post = {
    author: ({ userId }, args, { AuthorModel }) => {
        return AuthorModel.find(author => author.id === userId);
    }
}

module.exports = {
    Post
}``