import React from 'react'
import './Greeting.css'

function Greeting() {
  return (
    <div className='greetingContainer'>
        <div className='greetingNotes'>
            <h3>Hello,</h3>
            <h2>Dr.&nbsp;Alaba&nbsp;Jammal</h2>
            <p>Have A Nice Day At Work</p>
        </div>

        <div className='greetingImage'>
            <img src='https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1676378606~exp=1676379206~hmac=e5fae2220d2e454f6e519af3515ef002c263df85d80c08d0a4c5a766de62a879' alt='client' />
        </div>
    </div>
  )
}

export default Greeting