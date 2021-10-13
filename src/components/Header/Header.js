import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user, Logout} = useAuth();
    return (
      <nav className='click'>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/information'>Information</NavLink>
          <NavLink to='/embassy'>Embassy</NavLink>
          <NavLink to='/scholarship'>Scholarship</NavLink>
          {
            user.email ? <>
            <span style={{color: 'red', fontSize: '20px'}}>{user.displayName}</span>
            <button className='btn' onClick={Logout}>Logout</button>
            </>
            :
            <NavLink to='/login'>Login</NavLink>
          }
      </nav>
    );
};

export default Header;