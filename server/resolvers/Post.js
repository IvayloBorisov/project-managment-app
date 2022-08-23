const Post = {
    author: ({ userId }, args, { authors }) => {
        return authors.find(author => author.id === userId);
    }
}

module.exports = {
    Post
}