const Author = {
    posts: ({ id }, args, { posts }) => {
        return posts.find(post => post.userId === id);
    }
}

module.exports = {
    Author
}