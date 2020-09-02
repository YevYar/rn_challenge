export const actions = {
  SEARCH_REQUEST: "SEARCH_REQUEST",
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_FAILED: "SEARCH_FAILED",

  FETCH_MORE_REQUEST: "FETCH_MORE_REQUEST",
  FETCH_MORE_SUCCESS: "FETCH_MORE_SUCCESS",
  FETCH_MORE_FAILED: "FETCH_MORE_FAILED",

  FETCH_MOVIE_REQUEST: "FETCH_MOVIE_REQUEST",
  FETCH_MOVIE_SUCCESS: "FETCH_MOVIE_SUCCESS",
  FETCH_MOVIE_FAILED: "FETCH_MOVIE_FAILED",
};

export const initState = {
  currentSearchTitle: "",
  foundMovies: [],
  isFetchingMore: false,
  isFetchingMovie: false,
  isSearching: false,
  nextSearchPage: 1, // can be [1-100] (from API)
};

export interface Rating {
  source: string;
  value: string;
}

export interface Movie {
  id: string;
  poster: string;
  title: string;
  genre: string;
  director: string;
  shortPlot: string;
  fullPlot?: string; // will be set after user will request full info about movie
  cast: string;
  ratings: Rating[];
}

export interface State {
  currentSearchTitle: string;
  foundMovies: Movie[];
  isFetchingMore: boolean;
  isFetchingMovie: boolean;
  isSearching: boolean;
  nextSearchPage: number; // next page, which will be updated only on FETCH_MORE_SUCCESS
}

interface IAction {
  type: string;
}

export interface SearchAction extends IAction {
  payload: {
    title: string;
  };
}

export interface SearchSuccessAction extends IAction {
  payload: {
    movies: Movie[] | [];
  };
}

export type SearchFailedAction = IAction;

export type FetchMoreAction = IAction;

export interface FetchMoreSuccessAction extends IAction {
  payload: {
    movies: Movie[] | [];
  };
}

export type FetchMoreFailedAction = IAction;

export interface FetchMovieAction extends IAction {
  payload: {
    id: string;
  };
}

export interface FetchMovieSuccessAction extends IAction {
  payload: {
    id: string;
    fullPlot: string;
  };
}

export type FetchMovieFailedAction = IAction;

export type ActionTypes =
  | FetchMoreAction
  | FetchMoreSuccessAction
  | FetchMoreFailedAction
  | FetchMovieAction
  | FetchMovieSuccessAction
  | FetchMovieFailedAction
  | SearchAction
  | SearchSuccessAction
  | SearchFailedAction;