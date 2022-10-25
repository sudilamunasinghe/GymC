import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder='Full Name' required />
        <input type="email" placeholder='Type Your E-Mail' required />
        <input type="number" placeholder='Type Your Telephone number' required />
        <textarea placeholder='Write Here.....' name='message'></textarea>
        <input type="submit" value='Send message' />
      </form>
    </div>
  )
}

export default Contact