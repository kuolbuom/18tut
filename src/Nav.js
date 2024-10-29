import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to = '/'>Custom Validtation and accessibility features</Link><br />
      <Link to = '/register'>React login form that uses axios</Link>
    </div>
  )
}

export default Nav
