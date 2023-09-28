import React, { useEffect, useState } from 'react'
import "./Add.css"
import axios from "axios"
import ResultCard from './ResultCard';

const Add = () => {
    const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a7ba24b9`)
    .then((res) => {
        if(res.data.Search) {
        setMovies(res.data.Search)
        }
    })
    .catch((error) => console.log(error))
  }, [search])
    
    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-container'>
                        <input type='text'
                            placeholder='search for a movie' 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                   {movies.length > 0 && 
                    <ul className='results'>
                        {movies.map((movie) => (
                            <li key={movie.imdbID}><ResultCard movie={movie}/></li>
                        ))}
                    </ul>
                    }
                </div>
            </div>
        </div >
    )
}

export default Add