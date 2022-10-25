import React from 'react'
import './LandingPage.css'

function ContactUs() {

    return (
        <div id='contact'>
            <h1 className='contact-head'>CONTACT US</h1>
            <div className='contact-container'>
                <div className='landing-form-container'>
                    <h2>SEND US A MESSAGE</h2>
                    <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Phone' />
                        <textarea name="" id="" placeholder='Type here'></textarea>
                        <input type="submit" value='Send' />
                    </form>
                </div>
                <div className='map-container'>
                    <h2>FIND US HERE</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.381066216545!2d80.14086480989732!3d7.371234114477736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae321a9930a354d%3A0x1554279b367f171e!2sDambadeniya!5e0!3m2!1sen!2slk!4v1658907283621!5m2!1sen!2slk"
                        width="700"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className='mapdiv'>

                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactUs