import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
              className="fas fa-bars fa-1x"></i></span></button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Browse Movies<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/keep">Keepers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/unwanted">Unwanted</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
