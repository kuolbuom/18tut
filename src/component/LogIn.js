import { useEffect,  useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import {  Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { setAuth } = useAuth();


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();
  

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
 

  useEffect(() => {
    if (useRef.current) {
      useRef.current.focus();
    }
  }, [])

  useEffect(() => {
    setErrMsg('');
    // setUser('');
    // setPwd('')
  }, [user, pwd])

  const handleSubmit = async (e) => {
     e.preventDefault();
     setUser('');
     setPwd('');

    const userData = { user }; // Mock user data for demonstration
    localStorage.setItem("user", JSON.stringify(userData));
    setAuth(userData); // Set the authentication state
    navigate("/home", { replace: true }); // Redirect after login
  }


  return (
        <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text" 
              id="username" 
              ref={userRef}
              autoComplete="off"//Disables autofill on all inputs in the form
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password" 
              id="password" 
              onChange={(e) => setPwd(e.target.value)}
              autoComplete="new-password"//prevents browsers from pre-autofilling password
              value={pwd}
              required
            />
            <button>Log In</button>;
          </form>
          <p>
            Need Account?<br />
            <span>
              {/* put router link here */}
              {/* <a href="#">Sign Up</a> */}
              <Link to='/register'>Sign Up</Link>
            </span>
          </p>
        </section>
  )
}

export default LogIn

