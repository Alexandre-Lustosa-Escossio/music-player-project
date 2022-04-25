import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getFromLocalStorage } from '../utils/localStorageHandler'
import '../style/Header.css'

export default function Header() {

    const [userName, setUserName] = useState('')

    useEffect(() => {
      const { name } = getFromLocalStorage('userLoginData')
      setUserName(name)
    }, [])
    

    return (
        <nav id='teste' className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="=navbar-collapse" id="navbarSupportedContent">
                    <Link to='/profile'
                    data-testid='profile-link' 
                    id='profile-link'> Profile </Link>   
                    <span className='navbar-text'>
                                Hello {userName}
                    </span>
                    <Link to='/favorites'
                    data-testid='favorites-link'
                    id='favorites-link'> Favorites </Link>
                    <Link to='/search' data-testid='search-link' > Search Music</Link>
                </div>
            </div>
        </nav>
    )
}
