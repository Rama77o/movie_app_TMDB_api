import React from 'react'
import "./ResultCard.css"
import { useMovieContext } from './context/GlobalContext'
import * as actions from "./context/Actiontypes"

const ResultCard = ({ movie }) => {
    const movieContext = useMovieContext();
    const storedWatchList = movieContext.watchList.find(
        (film) => film.imdbID === movie.imdbID
    );
    const storedWatched = movieContext.watched.find(
        (film) => film.imdbID === movie.imdbID
    );
    const watchListDisable = storedWatchList ? true : storedWatched ? true : false;
    const watchedDisable = storedWatched ? true : false;

    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                {movie.Poster ?
                    (<img src={movie.Poster} alt={movie.Title} />)
                    :
                    (<div className='filler-poster'></div>)}
            </div>
            <div className='info'>
                <div className='heading'>
                    <h3 className='title'>{movie.Title}</h3>
                    {movie.Year ?
                        (<h4 className='release-date'>{movie.Year}</h4>)
                        :
                        ("-")}
                </div>
                <div className='controls'>
                    <button
                        className='btn'
                        onClick={() => {
                            movieContext.MovieDispatch({ type: actions.ADD_MOVIE_TO_WATCHLIST, paload: movie })
                        }}
                        disabled={watchListDisable}>
                        Add To Watchlist
                    </button>

                    <button
                        className='btn'
                        onClick={() => {
                            movieContext.MovieDispatch({ type: actions.ADD_MOVIE_TO_WATCHED, paload: movie })
                        }}
                        disabled={watchedDisable}>
                        Add To Watchled
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard