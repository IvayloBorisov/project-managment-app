const Query = {
    authors: (parent, args, { AuthorModel }) => AuthorModel.find(),
    posts: (parent, args, { PostModel }) => PostModel.find(),
    author: (parent, { id }, { AuthorModel }) => {
        return AuthorModel.findById(id);
    },
    post: (parent, { id }, { PostModel }) => {
        return PostModel.findByID(id);
    }
}

module.exports = {
    Query
}