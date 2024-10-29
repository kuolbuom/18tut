import React from 'react'
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
const Home = () => {
  const {auth, setAuth} = useAuth()

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem("user");
  };
  

  return (
    <div>
     <h1>Home</h1>
     <p>You are Logged In!</p>
     <Link to='/editor'>Go to Editor Page</Link>
     <br />
     <br />
     <Link to='/admin'>Go to Admin Page</Link>
     <br />
     <br />
     <Link to='/lounge'>Go to Lounge Page</Link>
     <br />
     <br />
     <Link to='/'>Go to Link Page</Link>
     <br />
     <br />
     <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Home
