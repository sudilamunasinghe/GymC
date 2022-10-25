import React from 'react'
import './LandingPage.css'
import 'https://kit.fontawesome.com/f07169c0c9.js'
function Footer() {
    return (
        <div id='footer'>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    {/* <a href="url">link text</a> */}
                    <ul className='footer-link-list'>
                        <li><a href="">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#trainers">Trainers</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Opening Hours</h2>
                    <ul className='footer-link-list2'>
                        <li>Monday : <span className='footer-time'>8.00 a.m - 9.30 p.m</span></li>
                        <li>Tuesday : <span className='footer-time'>8.00 a.m - 9.30 p.m</span></li>
                        <li>Wednesday : <span className='footer-time'>8.00 a.m - 9.30 p.m</span></li>
                        <li>Thursday : <span className='footer-time'>8.00 a.m - 9.30 p.m</span></li>
                        <li>Friday : <span className='footer-time'>8.00 a.m - 9.30 p.m</span></li>
                        <li>Saturday : <span className='footer-time'>9.00 a.m - 7.30 p.m</span></li>
                        <li>Sunday : <span className='footer-time'>9.00 a.m - 7.30 p.m</span></li>
                        {/* <pre><li>Monday :</li></pre>
                        <pre><li>Monday :</li></pre>
                        <pre><li>Monday :</li></pre>
                        <pre><li>Monday :</li></pre>
                        <pre><li>Monday :</li></pre>
                        <pre><li>Monday :</li></pre> */}
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 style={{marginLeft: '5px',marginBottom:'12px'}}>Contact Us</h2>
                    <i class="fa-solid fa-phone"></i><p className="footer-contact-details">037 - 4557821</p>
                    <i class="fa-solid fa-phone"></i><p className="footer-contact-details">076 - 6568714</p>
                    <i class="fa-solid fa-envelope"></i><p className="footer-contact-details">gymc@gmail.com</p>
                    <i class="fa-solid fa-location-dot"></i><p className="footer-contact-details">No.111, Dambadeniya, Kurunegala</p>
                    <div className="social-btn">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className="footer-bar">
                <p className="footer-bar-content">All Rights Reserved</p>
            </div>
        </div>
       
    )
}

export default Footer
