import React, { useState,useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './Results.css'
import axios from '../axios'
import requests from '../requests'

function Results() {
  const [movies,setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () =>{

      // const request = await axios.get(requests.fetchTopRated)

      // setMovies(request?.data.results)

      // return request 
      const url = 'https://api.themoviedb.org/3' + requests.fetchActionMovies
      console.log("URRRLLL",url)
      try {
        

        const response = await fetch(url)
        const data = await response?.json()
     

        setMovies(data)
       
    }
      catch (er) {

      }


    }
    return fetchData()

    
  }, [])

  console.log("FETCHHHH",movies)

  // const displayMovies = movies.map((item)=> <MovieCard /> )

  return (

    <div className='results'>
      {/* {displayMovies} */}
    </div>
  )
}

export default Results
