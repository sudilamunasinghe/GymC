import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div id='main'>
      <div className='name'>
        <h2>DON'T BE AFRAID OF</h2>
        <h1><span>FAILURE</span></h1>
        <h2>THIS IS THE WAY TO</h2>
        <h1><span>SUCCESS</span></h1>
        {/* <p className='details'>Build Your Body And Fitness With Professional Touch</p> */}
        <div className='header-btns'>
          {/* <Link to='/registration'> */}
          <a href="/registration" className='header-btn' style={{ textDecoration: 'none' }}>JOIN US</a>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}
