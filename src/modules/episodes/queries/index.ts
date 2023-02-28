import { gql } from 'graphql-request';

export const allEpisodes = gql`
    query episodes {
        episodes {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
            }
        }
    }
`;
