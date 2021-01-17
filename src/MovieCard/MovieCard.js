import React from 'react'
import './MovieCard.css'
import TextTruncate from 'react-text-truncate'
import ThumbUpSharp from '@material-ui/icons/ThumbUpAltSharp'
import { MovieCreation, MovieSharp } from '@material-ui/icons'

const base_url = 'https://image.tmdb.org/t/p/original/'

function MovieCard({ movie }) {
  console.log({ movie })
  // console.log("EACH COMPONENT", movie)
  return (

    <div className='movieCard'>
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt='movie poster' />
      <TextTruncate
        line={1}
        element='p'
        truncateText='...'
        text={movie.overview}
      />
      <h2>{movie.name || movie.original_title} </h2>
      <p className='movieCard__stats'>
        {movie.media_type && `${movie.media_type} . `}
        {movie.release_date || movie.first_air_date}  .
        <ThumbUpSharp />{' '}
        {movie.vote_count}
      </p>
    </div>
  )
}

export default MovieCard
