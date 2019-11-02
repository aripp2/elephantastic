import React from 'react';
// import { connect } from 'react-redux';
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

// export const mapDispatchToProps = dispatch => ({
//   setFavs: 
// })

export default NavHeader;