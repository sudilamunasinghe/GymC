import React from 'react'
import './Card.css'
// import owner from '../../../../images/owner.png'

function Card(props) {
    return (
      <div className='Headr'>
          <div className='Head'>
              
              {/* <p>Lorem ipsum dolor sit amet consectetur </p> */}
                <div className='prof'>
                    <h1 id='Cheading'>{props.title}</h1>
                    <p id='cardP'>{props.para}</p>
                </div>
          </div>
      </div>
    )
  }

export default Card