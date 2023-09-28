import React from 'react'
import "./MovieControls.css"
import { ImEye } from "react-icons/im"
import { ImEyeBlocked } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
import "./MovieControls.css"
import { useMovieContext } from './context/GlobalContext';
import * as actions from "./context/Actiontypes";

const MovieControls = ({ movie, type }) => {
    const movieContext = useMovieContext();
    return (
        <div className='inner-card-controls'>
            {type === "watchList" && (
                <>
                    <button className='ctrl-btn'
                        onClick={() => {
                            movieContext.MovieDispatch({
                                type: actions.ADD_MOVIE_TO_WATCHED,
                                paload: movie
                            })
                        }}>
                        <ImEye />
                    </button>
                    <button className='ctrl-btn'
                        onClick={() => {
                            movieContext.MovieDispatch({
                                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                                paload: movie.imdbID
                            })
                        }}>
                        <FaTimes />
                    </button>
                </>
            )}
            {type === "watched" && (
                <>
                    <button className='ctrl-btn'
                        onClick={() => {
                            movieContext.MovieDispatch({
                                type: actions.MOVE_TO_WATCHLIST,
                                paload: movie
                            })
                        }}>
                        <ImEyeBlocked />
                    </button>
                    <button className='ctrl-btn'
                        onClick={() => {
                            movieContext.MovieDispatch({
                                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                                paload: movie.imdbID
                            })
                        }}>
                        <FaTimes />
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls