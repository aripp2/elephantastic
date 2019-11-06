import React from 'react';
import { NavLink } from "react-router-dom";
import './NavHeader.scss';

const NavHeader = () => {
  return (
    <header>
      <h1>PuppyLove</h1>
      <NavLink exact to='/' className='nav-link' activeClassName='selected'>VOTE</NavLink>
      <NavLink to='/search' className='nav-link' activeClassName='selected'>SEARCH</NavLink>
      <NavLink to='/favorites' className='nav-link' activeClassName='selected'>FAVORITES</NavLink>
    </header>
  )
}

export default NavHeader;