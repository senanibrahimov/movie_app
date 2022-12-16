import { ACTION_TYPES } from "../actionTypes";

const initialState = {
  movies: [{ movieID: '', movieTitle: "", poster: "", movieYear:'', colored: false }],
};

export function addListReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_LIST:
      return {
        ...state,
        movies: [
          ...state.movies,
          action.movies,
        ],
      };
      case ACTION_TYPES.REMOVE_LIST:
        return {
          ...state,
          movies:[
          ...state.movies.filter(movie=> movie.movieID!==action.movies.movieID)
          ]
        }

    default:
      return state;
  }
}
