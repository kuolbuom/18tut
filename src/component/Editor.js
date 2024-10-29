import React from 'react'
import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <div>
      <p><h1>Editors Page</h1></p>
      <span>
        You must have been <br />
        assigned an Editor Role.
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

export default Editor
