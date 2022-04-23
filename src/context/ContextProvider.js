import AppContext from "./AppContext";
import React, { useState } from 'react'

export default function ContextProvider({children}) {
        
    const [favoriteSongs, setFavoriteSongs] = useState([])

    const context = {
        favoriteSongs,
        setFavoriteSongs
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}
