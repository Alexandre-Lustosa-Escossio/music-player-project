import React, {useState, useEffect} from 'react'
import { getLocalStorage } from '../utils/localStorageHandler'

export default function Header() {

    const [userName, setUserName] = useState('')

    useEffect(() => {
      const { name } = getLocalStorage('userLoginData')
      setUserName(name)
    }, [])
    

    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className='navbar-text'>
                Hello {userName}
            </span>
        </nav>
    )
}
