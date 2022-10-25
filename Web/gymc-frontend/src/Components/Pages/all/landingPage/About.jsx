import React from 'react'
import './LandingPage.css'
import aboutImg from '../../../../images/about.png'

function About() {
    return (
        <div id='about'>
            <h1 className='about-head'>ABOUT US</h1>
            <div id='about-sub'>
                <div className='about-image'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='about-text'>
                    <h2>Every Day Is A Chance To Become Better</h2>
                    <h5>¨If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.¨ — Hippocrates</h5>
                    <div className='about-text-card-container' style={{ marginTop: '20px' }}>
                        <div className='about-text-card'>
                            <h4>Body And Mind</h4>
                            <p>The body achieves what the mind believes. Convince your mind to push your body.</p>
                        </div>
                        <div className='about-text-card'>
                            <h4>Healthy Life</h4>
                            <p>Push yourself to develop and maintain health-enhancing behaviours with our workout and diet plans.</p>
                        </div>
                        <div className='about-text-card'>
                            <h4>Strategies</h4>
                            <p>Have fun and stay motivated by monitoring progress while maintaining a consistent routine</p>
                        </div>
                        <div className='about-text-card'>
                            <h4>Workout</h4>
                            <p>Get workout schedules curated to meet your needs from our experienced professional trainers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About