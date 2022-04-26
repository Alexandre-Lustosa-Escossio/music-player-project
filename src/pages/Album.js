import React, { useEffect, useState } from 'react'
import SongCard from '../components/SongCard'
import { getSongsFromAlbum } from '../utils/apiHander'
import Header from '../components/Header'
import '../style/Album.css'

export default function Album({match}) {

    const [songs, setSongs] = useState([])

    useEffect(() => {
      const fetchApi = async () => {
        const { results } = await getSongsFromAlbum(match.params.id)
        results.shift()
        setSongs(results)
      }
      fetchApi()
    }, [])
    

  return (
    <div>
      <Header />
      <div id='main-div'>
        <div id='album-cover-div'>
          {songs[0]&&<img id='album-cover' src={songs[0].artworkUrl100} alt='album' />}
        </div>
        <div id='songs-container'
        className='overflow-auto'>
            {songs.map((song,index) => <SongCard key={index} song={song}/>)}
        </div>
      </div>
    </div>
  )
}
