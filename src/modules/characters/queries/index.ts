import { gql } from 'graphql-request';

export const allCharacters = gql`
    query characters($page: Int!, $name: String!) {
        characters(page: $page, filter: { name: $name }) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                image
            }
        }
    }
`;

export const charactersPage = gql`
    query charactersPage($page: Int!) {
        characters(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                image
            }
        }
    }
`;

export const oneCharacter = gql`
    query character($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            image
            origin {
                name
            }
            location {
                name
            }
        }
    }
`;
