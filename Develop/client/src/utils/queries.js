import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql `
query allBooks {
    Books {
        author
        description
        bookId
        image
        link
        title
    }
}
`;