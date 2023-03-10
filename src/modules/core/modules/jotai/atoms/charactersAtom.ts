import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

import type {
    CharactersByIdsQueryVariables,
    CharactersQueryResults,
} from 'modules/api';

export type FavouriteCharactersIds = string[];

export const favouriteCharactersIdsAtom =
    atomWithStorage<FavouriteCharactersIds>('favouriteCharacters', []);

export const charactersAtom = atom<CharactersQueryResults>([]);
