import { ACTION_TYPES } from "../actionTypes";

export const addListAction = (movieID, movieTitle, poster, movieYear, colored) => {
  return {
    type: ACTION_TYPES.ADD_LIST,
    movies: { movieID: movieID, movieTitle: movieTitle, poster: poster, movieYear: movieYear, colored: colored },
  };
};
