import React, { useContext, useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import AppContext from '../context/AppContext'
import { getFromLocalStorage, saveOnLocalStorage } from '../utils/localStorageHandler'
import '../style/FavoriteButton.css'

export default function FavoriteButton({ song }) {
    
    const [isFavorite, setIsFavorite] = useState(false)
    const { setFavoriteSongs } = useContext(AppContext)

    useEffect(() => {
        const favoriteSongs = getFromLocalStorage('favoriteSongs')
        if(favoriteSongs){
            const {trackId} = song
            favoriteSongs.some(favoriteSong => favoriteSong.trackId === trackId) ? setIsFavorite(true): setIsFavorite(false)
        }
    }, [])
    
    useEffect(() => {
        const favoriteSongs = getFromLocalStorage('favoriteSongs')
        setFavoriteSongs(favoriteSongs)
    }, [isFavorite, setFavoriteSongs])
    
    const checkIfLocalStorageExists = () => {
        const favoriteSongs = getFromLocalStorage('favoriteSongs')
        return (
            favoriteSongs ? true : false
        )
    }

    const initiateLocalStorage = () => {
        saveOnLocalStorage('favoriteSongs', [song])
        setIsFavorite(true)
    }

    const removeFromLocalStorage = () => {
        const favoriteSongs = getFromLocalStorage('favoriteSongs')
        const newLocalStorage = favoriteSongs.filter(favoriteSong => favoriteSong.trackId !== song.trackId)
        saveOnLocalStorage('favoriteSongs', newLocalStorage)
        setIsFavorite(false)
    }

    const addToLocalStorage = () => {
        const favoriteSongs = getFromLocalStorage('favoriteSongs')
        saveOnLocalStorage('favoriteSongs', [...favoriteSongs, song])
        setIsFavorite(true)
    }

    const handleLocalStorageChanges = () => {
        const favoriteSongs = getFromLocalStorage('favoriteSongs')
        const {trackId} = song
        favoriteSongs.some(favoriteSong => favoriteSong.trackId === trackId) ?
        removeFromLocalStorage() : addToLocalStorage()
    }

    const handleFavoriteBtnClick = () => {
        const localStorageExists = checkIfLocalStorageExists()
        localStorageExists ? handleLocalStorageChanges() : initiateLocalStorage()
    }

    return (
        <div id='favorite-button-container'>
            {isFavorite ? <BsHeartFill size={28} onClick={() => handleFavoriteBtnClick()}/> : <BsHeart size={28} onClick={() => handleFavoriteBtnClick()}/> }
        </div>
  )
}
