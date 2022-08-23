const colors = require('colors');
require('dotenv').config();

const connectDB = require('./config/db');

const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/shema');
const { Query } = require('./resolvers/Query');
const { Author } = require('./resolvers/Author');
const { Post } = require('./resolvers/Post');
const { authors, posts } = require('./data/data');

//Connect to the database
connectDB();

//Create ApolloServer
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Author,
        Post
    },
    context: {
        authors,
        posts
    }
});

server.listen().then(({ url }) => console.log(`Server is ready at url: ${ url }`));