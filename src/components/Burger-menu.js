import React, { useState } from 'react'
import imagen from '../images/menu-h.png'
import { Link } from 'react-router-dom';

const Burgermenu = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const handleClick = (page) => {
        setCurrentPage(page);
        document.querySelector("#btn-menu").checked = false
      }

    return (
        <div id="burger-menu">
            <input type="checkbox" id="btn-menu" />
            <label for="btn-menu"><img src={imagen} alt="menu png, icono png, responsive png" /></label>
            <nav class="menu">
                <div class="nav" >
                    <Link to="/MusicApp-selsa" onClick={() => handleClick('home')}>
                      <a href="#" className={currentPage === 'home' ? 'active' : ''}>
                        <i class="fas fa-home"></i> <b>Home</b>
                      </a>
                    </Link>
                    <Link to="/MusicApp-selsa/collections" onClick={() => handleClick('collections')}>
                      <a href="#" className={currentPage === 'collections' ? 'active' : ''}>
                        <i class="material-symbols-outlined">library_music</i> <b>My Collections</b>
                      </a>
                    </Link>
                    <Link to="/MusicApp-selsa/radio" onClick={() => handleClick('radio')}>
                      <a href="#" className={currentPage === 'radio' ? 'active' : ''}>
                        <i class="material-symbols-outlined">radio</i> <b>Radio</b>
                      </a>
                    </Link>
                    <Link to="/videos" onClick={() => handleClick('videos')}>
                      <a href="#" className={currentPage === 'videos' ? 'active' : ''}>
                        <i class="fas fa-film"></i> <b>Music videos</b>
                      </a>
                    </Link>
                </div>
                <div class="nav">
                    <Link to="/profile" onClick={() => handleClick('profile')}>
                      <a href="#" className={currentPage === 'profile' ? 'active' : ''}>
                        <i class="fas fa-user"></i> <b>Profile</b>
                      </a>
                    </Link>
                    <Link to="/logout" onClick={() => handleClick('logout')}>
                      <a href="#" className={currentPage === 'logout' ? 'active' : ''}>
                        <i class="fas fa-sign-out-alt"></i> <b>Log out</b>
                    </a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Burgermenu
