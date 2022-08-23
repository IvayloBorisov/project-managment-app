const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        authors: [Author!]!,
        posts: [Post!]!,
        author(id: ID!): Author,
        post(id: ID!): Post,
    }

    type Author {
        id: String!,
        name: String!,
        username: String!,
        email: String!,
        address: Address,
        posts: [Post!]
    },

    type Address {
        street: String!,
        city: String!,
        zipcode: String!,
    }

    type Post {
        id: String!,
        userId: String!,
        title: String!,
        body:  String!,
        author: Author!,
    }
`;

module.exports = {
    typeDefs
}
