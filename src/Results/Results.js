import React, { useState,useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './Results.css'
import axios from 'axios'
import requests from '../requests'

function Results({selectedOption}) {
  const [movies,setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () =>{

      const req = await axios.get(selectedOption)

      setMovies(req.data.results)

    }
    return fetchData()


    
    
  }, [])

  
  const displayMovies = movies.map(item => <MovieCard key={item.id} movie={item} />)
  
  console.log(">>>>>", movies)
  return (

    <div className='results'>
      {displayMovies}
    </div>
  )
}

export default Results
