import React from 'react'
import Header from '../components/Header'
import '../style/Profile.css'

export default function Profile() {
  return (
    <div>
      <Header />
      <div id='profile-div'>
        <h2>Hello, I'm Alexandre. Nice to meet you!</h2>
        <img id='profile-img' 
          src={'https://avatars.githubusercontent.com/u/77128459?v=4'}
          alt='profile' />
        <div>
        <h2>Github Profile:</h2> 
        <a id='github-link' href='https://github.com/Alexandre-Lustosa-Escossio'>https://github.com/Alexandre-Lustosa-Escossio</a>
        <h2>Linkedin Profile:</h2> 
        <a id='github-link' href='https://www.linkedin.com/in/alexandre-lustosa'>https://www.linkedin.com/in/alexandre-lustosa</a>
        </div>
      </div>
    </div>
  )
}
