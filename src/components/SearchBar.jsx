import React, { useEffect, useState } from 'react'
import { getAlbumsFromArtist } from '../utils/apiHander'
import AlbumCard from './AlbumCard'
import '../style/SearchBar.css'
import { Carousel } from 'react-bootstrap'


export default function SearchBar() {

    const [artistName, setArtistName] = useState('')  
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)

    useEffect(() => {
        artistName.length > 2? setIsBtnDisabled(false): setIsBtnDisabled(true)
    }, [artistName])
    
    const handleInputChange = ({target: {value}}) => {
        setArtistName(value)
    }  

    const handleSearchBtnClick = async () => {
        setIsLoading(true)
        setActiveSearch(true)
        const { results } = await getAlbumsFromArtist(artistName)
        setSearchResults(results)
        setIsLoading(false)
    }

    const renderSearchResults = () => {
        if (activeSearch) {
            return(
                searchResults.length > 0 ?
                    <Carousel>
                        {searchResults.map((album,index) =>(
                            <Carousel.Item>
                                <AlbumCard album={album} key={index} />
                            </Carousel.Item>))}
                    </Carousel>
                    :
                    <h1> No album found </h1>
                )
            }
        return(
            <div></div>
        )

    }


    return (
        <div id='form-container'>
            <form className="d-flex">
                <input className="form-control me-2"
                type="search"
                placeholder="Artist Name"
                aria-label="Search"
                value={artistName}
                onChange={(e) => handleInputChange(e)} />
                <button className="btn btn-dark"
                type="button"
                disabled={isBtnDisabled}
                onClick={() => handleSearchBtnClick()}>Search</button>
            </form>
            {isLoading? <h1>Loading...</h1> : renderSearchResults()}
        </div>
    )
}


