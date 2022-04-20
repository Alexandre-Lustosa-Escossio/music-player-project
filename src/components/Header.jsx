import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getLocalStorage } from '../utils/localStorageHandler'

export default function Header() {

    const [userName, setUserName] = useState('')

    useEffect(() => {
      const { name } = getLocalStorage('userLoginData')
      setUserName(name)
    }, [])
    

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/search">Navbar</a>
                <div className="=navbar-collapse" id="navbarSupportedContent">
                    <span className='navbar-text'>
                                Hello {userName}
                    </span>
                    <Link to='/search' > Search Music</Link>
                    <Link to='/favorites' > Favorites </Link>
                    <Link to='/profile' > Profile </Link>   
                </div>
            </div>
        </nav>
    )
}
