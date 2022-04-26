import React, { useContext } from 'react'
import Header from '../components/Header'
import SongCard from '../components/SongCard'
import AppContext from '../context/AppContext'
import '../style/Favorites.css'

export default function Favorites() {

  const {favoriteSongs} = useContext(AppContext)

  return (
    <div>
      <Header />
      <div id='main-div'>
        <h2>Favorites</h2>
        <div id='songs-container'
        className='overflow-auto'>
            {favoriteSongs.map((song,index) => <SongCard key={index} song={song} />)}
        </div>
      </div>
    </div>
  )
}
