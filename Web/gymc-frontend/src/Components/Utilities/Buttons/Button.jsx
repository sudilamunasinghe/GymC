import React from 'react'
import './Button.css'


export default function Button(props) {
  const className = `button ${props.type}`
  return (
    <div>
        
        <button className={className}>
          {props.label}
        </button>

    </div>
  )
}


