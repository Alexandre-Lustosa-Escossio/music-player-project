import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SongCard from '../components/SongCard'
import { getFromLocalStorage } from '../utils/localStorageHandler'

export default function Favorites() {

  const [favoriteSongs, setFavoriteSongs] = useState([])

  useEffect(() => {
    const localStorageFavoriteSongs = getFromLocalStorage('favoriteSongs')
    setFavoriteSongs(localStorageFavoriteSongs)
  }, [])
  

  return (
    <div>
      <Header />
      {favoriteSongs.map(song => <SongCard song={song} />)}
    </div>
  )
}
