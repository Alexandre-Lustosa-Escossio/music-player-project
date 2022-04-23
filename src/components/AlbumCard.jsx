import history from 'history'
import React from 'react'

export default function Card({ album }) {

  const handleAlbumCardClick = async () => {
    history.push(`/album/${album.id}`)
  }

  return (
    <div className="card"
        style={{"width": "18rem"}}
        onClick={() => handleAlbumCardClick()}
    >
        <img src={album.artworkUrl100} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{album.collectionName}</h5>
            <p className="card-text">{album.artistName}</p>
            <p className="card-text">{album.releaseDate}</p>
        </div>
    </div>
  )
}
