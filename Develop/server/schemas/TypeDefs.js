const { gql } = require('apollo-server-express');

const typeDefs = gql`
Query type: {
    me: User
}
Mutation type: {
    login(email, password): Auth
    addUser(username, email, password): Auth
    saveBook(authorArray, description, title, bookId, image, link): input
    removeBook(bookId): User
}
User type: {
    _id
    username
    email
    bookCount
    savedBooks
}
Book type: {
    bookId
    authors
    description
    title
    image
    link
}
Auth type:
    token
    user
`;

module.exports = typeDefs;