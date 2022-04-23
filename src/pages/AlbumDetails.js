import React, { useEffect, useState } from 'react'
import SongCard from '../components/SongCard'
import { getSongsFromAlbum } from '../utils/apiHander'

export default function AlbumDetails({match}) {

    const [songs, setSongs] = useState([])

    useEffect(() => {
      const fetchApi = async () => {
        const { results } = await getSongsFromAlbum(match.params.id)
        setSongs(results)
      }
      fetchApi()
    }, [])
    

  return (
    <div>
        {songs.map(song => <SongCard song={song}/>)}
    </div>
  )
}
