import React from 'react'

export default function NavBar() {
  return (
    <div className='nav'>
        <div className="logo">
            <h2>Digital <span>Marketing</span></h2>
            
        </div>
        <div className="navlist">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#socials">Socials</a></li>
            </ul>
        </div>
    </div>
  )
}
