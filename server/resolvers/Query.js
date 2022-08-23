const Query = {
    authors: (parent, args, {authors}) => authors,
    posts: (parent, args, {posts}) => posts,
    author: (parent, { id }, { authors }) => {
        console.log(id)
        return authors.find(author => author.id === id);
    },
    post: (parent, { id }, {  posts }) => {
        return posts.find(post => post.id === id);
    }
}

module.exports = {
    Query
}