import React, { Component } from 'react';
import AddMovie from './AddMovie.js'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-expand-md navbar-dark">
        <h2 className="nav-link white-text">Your DVD's</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className= "nav-link" activeClassName='is-active' to='/gothrough'>Go Through</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className= "nav-link" activeClassName='is-active' to='/keepers'>Keepers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className= "nav-link" activeClassName='is-active' to='/unwanted'>Unwanted</NavLink>
            </li>
          </ul>
          <span className="navbar-text white-text">
            <AddMovie />
          </span>
        </div>
      </nav>
    )
  }
}

export default Navbar;
