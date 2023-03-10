import { atom } from 'jotai';

export const searchAtom = atom<string>('');

export const pageAtom = atom<number>(1);
