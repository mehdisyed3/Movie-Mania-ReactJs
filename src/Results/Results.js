import React, { useState,useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './Results.css'

import requests from '../requests'

function Results() {
  const [movies,setMovies] = useState(["hello"])

  useEffect(async () => {
    try {
      const response = await fetch(requests.fetchTrending)
      const data = await response.json()

      console.log(data)
      
    }
    catch (er) {
      console.log(er)
    }
       
  }, [movies])

  console.log("FETCHHHH",movies)

  const displayMovies = movies.map((item)=> <MovieCard /> )

  return (

    <div className='results'>
      {displayMovies}
    </div>
  )
}

export default Results
