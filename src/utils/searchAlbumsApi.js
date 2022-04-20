export const getAlbumsFromArtist = (artistName) => {
    const URL = `https://itunes.apple.com/search?entity=album&term=${artistName}`
    return(
        fetch(URL)
        .then(res => res.json())
        .then(json => json)
        )
}