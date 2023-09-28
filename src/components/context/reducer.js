import * as actions from './Actiontypes'

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchList: [action.paload, ...state.watchList]
            };
        case actions.ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.imdbID !== action.paload.imdbID),
                watched: [action.paload, ...state.watched]
            };
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.imdbID !== action.paload)
            };
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.imdbID !== action.paload)
            };
        case actions.MOVE_TO_WATCHLIST:
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.imdbID !== action.paload.imdbID),
                watchList: [action.paload, ...state.watchList]
            };
        default:
            return state;
    }
}