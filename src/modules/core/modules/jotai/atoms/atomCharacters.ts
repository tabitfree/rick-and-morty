import { atomWithStorage } from 'jotai/utils';

export type FavouriteCharactersIds = string[];

export const favouriteCharactersIdsAtom =
    atomWithStorage<FavouriteCharactersIds>('favourite', []);
