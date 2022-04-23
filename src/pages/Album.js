import React, { useEffect, useState } from 'react'
import SongCard from '../components/SongCard'
import { getSongsFromAlbum } from '../utils/apiHander'

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
        {songs.map((song,index) => <SongCard key={index} song={song}/>)}
    </div>
  )
}
