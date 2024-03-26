import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import './Navbar.css';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='navbar-content'>
      <h1>Hi {user}!</h1>
    </div>
  );
}

export default Navbar;