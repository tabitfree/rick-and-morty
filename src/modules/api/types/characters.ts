import {
    CharactersQuery,
    CharacterQuery,
    CharactersByIdsQuery,
} from 'modules/api';

export type CharactersQueryResults = CharactersQuery['characters']['results'];

export type CharacterQueryResult = CharacterQuery['character'];

export type CharactersByIdsQueryResults =
    CharactersByIdsQuery['charactersByIds'];
