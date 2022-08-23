const Query = {
    authors: (parent, args, { AuthorModel }) => AuthorModel.find(),
    posts: (parent, args, { PostModel }) => PostModel.find(),
    author: (parent, { id }, { AuthorModel }) => {
        return AuthorModel.findById(author => author.id === id);
    },
    post: (parent, { id }, { PostModel }) => {
        return PostModel.findByID(post => post.id === id);
    }
}

module.exports = {
    Query
}