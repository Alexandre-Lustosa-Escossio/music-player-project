import React from 'react'

export default function SongCard({ song: {trackName, previewUrl} }) {

    return (
        <div>
            <div>
                <span>{trackName}</span>
            </div>
            <audio data-testid="audio-component" controls>
                <source src={ previewUrl } /> 
            </audio>
        </div>
    )
}
