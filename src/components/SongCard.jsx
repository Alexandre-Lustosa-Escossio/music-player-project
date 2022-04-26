import React from 'react'
import FavoriteButton from './FavoriteButton'
import '../style/SongCard.css'

export default function SongCard({ song }) {

    const {trackName, previewUrl}  = song
    
    return (
        <div>
            <div id='span-div'>
                <span id='span'>{trackName}</span>
            </div>
            <div id='song-card'>
                <audio data-testid="audio-component" controls>
                <source src={ previewUrl } /> 
                </audio>
                <FavoriteButton song={song} />
            </div>
        </div>
    )
}
