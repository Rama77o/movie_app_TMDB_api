import React from 'react'
import "./WatchList.css"
import { useMovieContext } from './context/GlobalContext'
import MovieCard from './MovieCard';

const WatchList = () => {
  const movieContext = useMovieContext();

  return (
    <div className='watch-list'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My WatchList</h1>
          <span className='movies-count'>
            {movieContext.watchList.length}
            {movieContext.watchList.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {movieContext.watchList.length > 0 ?
          (<div className='movie-grid'>
            {movieContext.watchList.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchList" />
            ))}</div>)
          :
          (<h2 className='no-movies'>no movies in your list add some!</h2>)}
      </div>
    </div>
  )
}

export default WatchList