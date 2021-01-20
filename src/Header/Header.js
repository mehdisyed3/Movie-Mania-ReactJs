
import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

function Header() {
  return (
    <div className='header'>
      <div className='header__icons'>

        <div className='header__icon header__icon--active'>
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className='header__icon'>
          <FlashOnIcon />
          <p>Trending</p>
        </div>

        <div className='header__icon'>
          <LiveTvIcon />
          <p>Live Tv</p>
        </div>

        <div className='header__icon'>
          <VideoLibraryIcon />
          <p>Library</p>
        </div>

        <div className='header__icon'>
          <SearchIcon />
          <p>Search</p>
        </div>

        <div className='header__icon'>
          <PersonOutlineIcon />
          <p>Account</p>
        </div>

      </div>

      <img className="header__logo" src='https://www.seekpng.com/png/full/1-19750_instagram-white-logo-instagram-logo-png-white-outline.png' alt='' />

    </div>
  )
}

export default Header
