import React, { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { getFromLocalStorage, saveOnLocalStorage } from '../utils/localStorageHandler'

export default function FavoriteButton({ song }) {
    
    const [isFavorite, setIsFavorite] = useState(false)


    useEffect(() => {
        const favoriteSongs = getFromLocalStorage('favoriteSongs')
        if(favoriteSongs){
            const {trackId} = song
            favoriteSongs.some(favoriteSong => favoriteSong.trackId === trackId) ? setIsFavorite(true): setIsFavorite(false)
        }
    }, [])
    

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
        <div>
            {isFavorite ? <BsHeartFill onClick={() => handleFavoriteBtnClick()}/> : <BsHeart onClick={() => handleFavoriteBtnClick()}/> }
        </div>
  )
}
