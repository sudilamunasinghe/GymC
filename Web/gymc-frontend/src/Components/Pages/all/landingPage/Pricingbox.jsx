import React from 'react'
import './LandingPage.css'

function Pricingbox(props) {
  return (
    <div className='p-box'>
        {/* <div className='p-b-img'>
            <img src={props.image} alt='' />
        </div> */}
        <div className='p-b-text'>
            <h2>{props.title}</h2>
            <p>{props.par}</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}

        </div>
    </div>
  )
}

export default Pricingbox