import React, { useEffect, useState } from 'react'
import { getAlbumsFromArtist } from '../utils/searchAlbumsApi'

export default function SearchBar() {

    const [artistName, setArtistName] = useState('')  
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        artistName.length > 2? setIsBtnDisabled(false): setIsBtnDisabled(true)
    }, [artistName])
    
    const handleInputChange = ({target: {value}}) => {
        setArtistName(value)
    }  

    const handleSearchBtnClick = async () => {
        setIsLoading(true)
        const { results } = await getAlbumsFromArtist(artistName)
        setSearchResults(results)
        setIsLoading(false)
    }

    const renderSearchResults = () => {
        return(
            searchResults.length > 0 ?
            searchResults.map((album,index) => 
            (
                <div className="card"
                style={{"width": "18rem"}}
                key={index} >
                    <img src={album.artworkUrl100} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{album.collectionName}</h5>
                        <p className="card-text">{album.artistName}</p>
                        <p className="card-text">{album.releaseDate}</p>
                    </div>
                </div>
            ))
            :
            <h1> No album found </h1>
        )

    }


    return (
        <div>
            <form className="d-flex">
                <input className="form-control me-2"
                type="search"
                placeholder="Artist Name"
                aria-label="Search"
                value={artistName}
                onChange={(e) => handleInputChange(e)} />
                <button className="btn btn-outline-success"
                type="button"
                disabled={isBtnDisabled}
                onClick={() => handleSearchBtnClick()}>Search</button>
            </form>
            {isLoading? <h1>Loading...</h1> : renderSearchResults()}
        </div>
    )
}


