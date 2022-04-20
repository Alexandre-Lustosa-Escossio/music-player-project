import React, { useState } from 'react'
import { getAlbumsFromArtist } from '../utils/searchAlbumsApi'

export default function SearchBar() {

    const [artistName, setArtistName] = useState('')  
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)

    const btnValidator = () => {
        artistName.length > 2? setIsBtnDisabled(false): setIsBtnDisabled(true)
    }

    const handleInputChange = ({target: {value}}) => {
        setArtistName(value)
        btnValidator()
    }  

    const handleSearchBtnClick = () => {
        getAlbumsFromArtist(artistName)
    }

    return (
        <form className="d-flex">
            <input className="form-control me-2"
            type="search"
            placeholder="Artist Name"
            aria-label="Search"
            value={artistName}
            onChange={() => handleInputChange()} />
            <button className="btn btn-outline-success"
            type="submit"
            disabled={isBtnDisabled}
            onClick={() => handleSearchBtnClick()}>Search</button>
        </form>
    )
}


