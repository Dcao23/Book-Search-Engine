const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const Resolvers = {
    Query: {
        User: async () => {
            return User.find();
        },
    },
    Mutation: {
        addUser: async (User, { username, email, password, savedBooks }) => {
            const user = await User.create({ username, email, password, savedBooks });
            const token = signToken(user);
            return { token, user };
        },
        login: async (user, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user);
            return { token, user };
        },
    },
    Query: {
        Books: async () => {
            return Books.find();
        },
    },
    Mutation: {
        addBook: async (Books, { authors, description, bookId, image, link, title }) => {
            const book = await Books.create({ authors, description, bookId, image, link, title });
            const token = signToken(book);
            return { token, book };
        },
    }
}

module.exports = Resolvers