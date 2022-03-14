import React from 'react';
import {Link , NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
      {/* <Link to="login" className="navbar-brand" >Titulo</Link> */}
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink activeclassname="active" to="/" className="nav-link" >HomeScreem</NavLink>
          <NavLink activeclassname="active" to="about" className="nav-link " aria-current="page" >AboutScreen</NavLink>
          <NavLink activeclassname="active" to="login" className="nav-link" >LoginScreen</NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}
