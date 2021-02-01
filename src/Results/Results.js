import React, { useState, useEffect } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import './Results.css'
import axios from 'axios'
import FlipMove from "react-flip-move"

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([])

 useEffect(() => {
   const fetchData = async () => {

    const req = await axios.get(selectedOption)

    setMovies(req.data.results)

    }
   
    return fetchData()


  }, [selectedOption])

  const displayMovies = movies.map(item => <FlipMove><VideoCard key={item.id} movie={item} /></FlipMove> )

  console.log(">>>>>", movies)
  return (

    <div className='results'>
      
        {displayMovies}
    
    </div>
  )
}

export default Results
