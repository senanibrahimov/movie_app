import { ACTION_TYPES } from "../actionTypes";

export const removeListAction = (movieID) => {
    return {
        type: ACTION_TYPES.REMOVE_LIST,
        movies: { movieID: movieID  }
    }
};