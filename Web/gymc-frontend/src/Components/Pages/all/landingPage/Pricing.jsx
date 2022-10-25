import React from 'react'
import Pricingbox from './Pricingbox'
import './LandingPage.css'
// import fimage1 from '../images/1.svg'
// import fimage2 from '../images/2.svg'
// import fimage3 from '../images/3.svg'
// import fimage4 from '../images/4.svg'

function Pricing() {
  return (
    <div id='pricing'>
      <h1>PRICING</h1>
      <div className='p-container'>
        {/* <Pricingbox title="AFFORDABLE PRICING FOR YOUR WORKOUTS" />
            <Pricingbox title="Monthly Plan" />
            <Pricingbox title="Daily Plan" /> */}
        {/* <Pricingbox title="Mobile App" /> */}
        <div className='p-box'>
          <h2>AFFORDABLE PRICING FOR YOUR WORKOUTS</h2>
          <p>For Registration Rs. <span>500.</span> Packages including the services.</p>

        </div>
        <div className='p-box'>
          <h2>Personal Training</h2>
          <p>Rs. <span>3000.</span> / Mo</p>
          <ul className='price'>
            <li>Cardio and Fitness Training</li>
            {/* <li>Personal Training</li> */}
            <li>Workout Scheduling</li>
            <li>Diet Planning</li>
            <li>Mobile App</li>
          </ul>
        </div>
        <div className='p-box'>
          <h2>Non-Personal Training</h2>
          <p>Rs. <span>300.</span> / Day</p>
          <ul className='price'>
            <li>Cardio and Fitness Training</li>
            <li>Workout Planning</li>
            <li>Self Training</li>
            {/* <li>Mobile App</li> */}
          </ul>

          <p>Rs. <span>2000.</span> / Mo</p>
          <ul className='price'>
            <li>Cardio and Fitness Training</li>
            <li>Workout Planning</li>
            <li>Diet Planning</li>
            <li>Mobile App</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing