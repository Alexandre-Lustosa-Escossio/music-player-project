import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getFromLocalStorage } from '../utils/localStorageHandler'

export default function Header() {

    const [userName, setUserName] = useState('')

    useEffect(() => {
      const { name } = getFromLocalStorage('userLoginData')
      setUserName(name)
    }, [])
    

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="=navbar-collapse" id="navbarSupportedContent">
                    <span className='navbar-text'>
                                Hello {userName}
                    </span>
                    <Link to='/search' data-testid='search-link' > Search Music</Link>
                    <Link to='/favorites' data-testid='favorites-link' > Favorites </Link>
                    <Link to='/profile' data-testid='profile-link' > Profile </Link>   
                </div>
            </div>
        </nav>
    )
}
