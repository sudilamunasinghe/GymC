import React, { useState } from 'react'
import logo from '../../../../images/logo.png';
import { Link } from 'react-scroll';
import './LandingPage.css'
// import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className='logo'>
                <img src={logo} smooth={true} duration={500} alt='' />
            </Link>
            <input className='menu-btn' type="checkbox" id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='features' smooth={true} duration={500}>Features</Link></li>
                <li><Link to='trainers' smooth={true} duration={500}>Trainers</Link></li>
                <li><Link to='pricing' smooth={true} duration={500}>Pricing</Link></li>
                <li><Link to='about' smooth={true} duration={500}>About us</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact us</Link></li>
                <li><a href='/login' style={{ textDecoration: 'none' }} smooth={true} duration={500}>Login</a></li>
            </ul>
        </nav>
    )
}
