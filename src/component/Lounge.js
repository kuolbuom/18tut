import React from 'react'
import { Link } from 'react-router-dom'

const Lounge = () => {
  return (
    <div>
    <p><h1>the Lounge Page</h1></p>
    <span>
      Admin and Editors can <br />
      hang out here.
    </span>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link to='/home'>Home</Link>
  </div>
  )
}

export default Lounge
