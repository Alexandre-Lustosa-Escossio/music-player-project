import React, { useContext } from 'react'
import Header from '../components/Header'
import SongCard from '../components/SongCard'
import AppContext from '../context/AppContext'

export default function Favorites() {

  const {favoriteSongs} = useContext(AppContext)

  return (
    <div>
      <Header />
      {favoriteSongs.map((song,index) => <SongCard key={index} song={song} />)}
    </div>
  )
}
