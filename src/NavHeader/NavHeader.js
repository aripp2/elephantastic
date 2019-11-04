import React from 'react';
import { NavLink } from "react-router-dom";
import './NavHeader.scss';

const NavHeader = () => {
  return (
    <header>
      <h1>FurBaby Love</h1>
      <NavLink to='/'>VOTE</NavLink>
      <NavLink to='/search'>SEARCH</NavLink>
      <NavLink to='/favorites'>FAVORITES</NavLink>
    </header>
  )
}

export default NavHeader;