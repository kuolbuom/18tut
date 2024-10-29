import React from 'react'
import { Link } from 'react-router-dom'

const LinkPage = () => {
  return (
    <div>
     <h1> <h4>Links</h4></h1>
     <p><h1>Public</h1></p>
     <Link to='/login'>Login</Link>
     <br />
     <Link to='/register'>Register</Link>

     <p><h1>Private</h1></p>
     <Link to='home'>Home</Link>
     <br />
     <Link to='/editor'>Editors Page</Link>
     <br />
     <Link to='/admin'>Admin Page</Link>
    </div>
  )
}

export default LinkPage
