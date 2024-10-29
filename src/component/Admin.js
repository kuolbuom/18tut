import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <p><h1>Admin Page</h1></p>
      <span>
        You must have been <br />
        assigned an Admin Role.
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

export default Admin
