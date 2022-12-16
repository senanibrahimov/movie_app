import { ACTION_TYPES } from "../actionTypes";

const initialState = {
    titleList:'',
    movies:[
        {movieTitle:''},
        {movieRate:''},
        {poster:''}
    ]
};

export function removeListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_LIST:
            return { ...state, titleList: action.titleList, movies: action.movie}

        default:
            return state
    }
};