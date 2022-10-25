
import React from 'react'
import timage1 from '../../../../images/t1.png'
import timage2 from '../../../../images/t2.png'
import timage3 from '../../../../images/t3.png'
import timage4 from '../../../../images/t4.png'
import sicon1 from '../../../../images/facebook.svg'
// import sicon2 from '../../images/messenger.svg'
import sicon3 from '../../../../images/instagram.svg'
import sicon4 from '../../../../images/twitter.svg'
import './LandingPage.css'


function Trainers() {
    return (
        <div id='trainers'>
            <h1>TRAINERS</h1>
            <div className='t-container'>
                <div className="t-box">
                    <img src={timage1} alt="" className='dp' />
                    <div class="trainer-content">
                        <p>Expert Trainer</p>
                        <span className='t-name'>John Doe</span>
                        <div class="t-share">
                            <a href="#" alt="facebook"><img src={sicon1} alt="" /></a>
                            {/* <a href="#"  alt="messenger"><img src={sicon2} alt="" /></a> */}
                            <a href="#" alt="instagram"><img src={sicon3} alt="" /></a>
                            <a href="#" alt="twitter"><img src={sicon4} alt="" /></a>

                        </div>

                    </div>
                </div>
                <div className="t-box">
                    <img src={timage2} alt="" className='dp' />
                    <div class="trainer-content">
                        <p>Expert Trainer</p>
                        <span className='t-name'>Olivia Emma</span>
                        <div class="t-share">
                            <a href="#" alt="facebook"><img src={sicon1} alt="" /></a>
                            {/* <a href="#"  alt="messenger"><img src={sicon2} alt="" /></a> */}
                            <a href="#" alt="instagram"><img src={sicon3} alt="" /></a>
                            <a href="#" alt="twitter"><img src={sicon4} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="t-box">
                    <img src={timage3} alt="" className='dp' />
                    <div class="trainer-content">
                        <p>Expert Trainer</p>
                        <span className='t-name'>Jos Philip</span>
                        <div class="t-share">
                            <a href="#" alt="facebook"><img src={sicon1} alt="" /></a>
                            {/* <a href="#"  alt="messenger"><img src={sicon2} alt="" /></a> */}
                            <a href="#" alt="instagram"><img src={sicon3} alt="" /></a>
                            <a href="#" alt="twitter"><img src={sicon4} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="t-box">
                    <img src={timage4} alt="" className='dp' />
                    <div class="trainer-content">
                        <p>Expert Trainer</p>
                        <span className='t-name'>Christina</span>
                        <div class="t-share">
                            <a href="#" alt="facebook"><img src={sicon1} alt="" /></a>
                            <a href="#" alt="instagram"><img src={sicon3} alt="" /></a>
                            <a href="#" alt="twitter"><img src={sicon4} alt="" /></a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Trainers