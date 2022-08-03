import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Header = () => {

const {user,setUser} = useContext(UserContext);

const logout = () => {
  setUser(null);
}

  return (
    <div className='header'>
        <div >
        
        <Link className='button' to="/history">history</Link>
        <Link className='button' to="/foods">foods</Link>
        <Link className='button' to="/exercises">exercises</Link>
        <Link className='button' to="/posts">posts</Link>
        <Link className='button' to="/routines">routines</Link>
        <Link className='button' to="/progress">progress</Link>
        <Link className='button' to="/register">register</Link>
        {user ?  (<button onClick={logout}>Logout</button>) : (<Link className='button' to="/login">login</Link>)}
        </div>
    
    </div>
  )
}

export default Header
