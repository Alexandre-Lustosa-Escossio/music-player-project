import React from 'react'
import FavoriteButton from './FavoriteButton'

export default function SongCard({ song }) {

    const {trackName, previewUrl}  = song
    
    return (
        <div>
            <div>
                <span>{trackName}</span>
            </div>
            <audio data-testid="audio-component" controls>
                <source src={ previewUrl } /> 
            </audio>
            <FavoriteButton song={song} />
        </div>
    )
}
