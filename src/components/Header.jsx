import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getFromLocalStorage } from '../utils/localStorageHandler'
import '../style/Header.css'
import { BsFillPersonFill, BsHeartFill, BsSearch } from "react-icons/bs" 


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
                    id='profile-link'>
                        <BsFillPersonFill size={42} /> 
                    </Link>   
                    <h1 className='navbar-text'>
                                Hello {userName}
                    </h1>
                    <div id='favorite-search-container'>
                        <div id='favorites-link'>
                            <Link to='/favorites'
                            data-testid='favorites-link'
                            > 
                                <BsHeartFill size={28}/>
                            </Link>
                        </div>
                        <div>
                            <Link to='/search' data-testid='search-link' >
                                <BsSearch size={28}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
