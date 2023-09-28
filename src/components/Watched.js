import React from 'react'
import "./Watched.css"
import { useMovieContext } from './context/GlobalContext'
import MovieCard from './MovieCard';

const Watched = () => {
  const movieContext = useMovieContext();

  return (
    <div className='watched'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My Watched</h1>
          <span className='movies-count'>
            {movieContext.watched.length}
            {movieContext.watched.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {movieContext.watched.length > 0 ?
          (<div className='movie-grid'>
            {movieContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}</div>)
          :
          (<h2 className='no-movies'>no movies in your list add some!</h2>)}
      </div>
    </div>
  )
}

export default Watched;