import React from 'react'
import imagen from '../images/icon.png'

const Header = () => {
  return (
    <header>
        <div id="logo">
            <img src={imagen} alt="icon music"/>
        </div>
        <div id="search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search"/>
        </div>
    </header>
  )
}

export default Header 
