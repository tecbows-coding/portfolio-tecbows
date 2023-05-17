import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import profilePic from '../assets/images/tecbows-logo.png'

const Header = () => {
    const [menu, togglemenu] = useState(false)
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={() => togglemenu(!menu)}></i>
            <header className={menu && 'active'} id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img alt="profile picture" src={profilePic} className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Tecbows Coding</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li>
                                <NavLink onClick={() => togglemenu(false)} to='/'><i className="bx bx-home"></i>Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => togglemenu(false)} to='/about'><i className="bx bx-home"></i>About</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => togglemenu(false)} to='/resume'><i className="bx bx-home"></i>Resume</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => togglemenu(false)} to='/contact'><i className="bx bx-home"></i>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header