import { NameSpace } from '../../const';
import { State } from '../../types/state';
import Films from '../../types/films';
import Promo from '../../types/promo';
import Favorite from '../../types/favorite';

export const getFilms = (state: State): Films => state[NameSpace.MainScreen].films;
export const getPromo = (state: State): Promo | null => state[NameSpace.MainScreen].promo;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.MainScreen].isDataLoaded;
export const getFilteredFilms = (state: State): Films => state[NameSpace.MainScreen].filteredFilms;
export const getCardCount = (state: State): number => state[NameSpace.MainScreen].cardCount;
export const getFavouriteFilms = (state: State): Favorite => state[NameSpace.MainScreen].favoriteFilms;
export const getFavouriteCount = (state: State): number => state[NameSpace.MainScreen].favoriteCount;
