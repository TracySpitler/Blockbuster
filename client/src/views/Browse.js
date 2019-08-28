import React, { Component } from 'react';
import Movies from '../components/Movies.js';
import Navbar from '../components/Navbar.js';

//React Router
import { BrowserRouter as Router } from 'react-router-dom'

class Browse extends Component {

  render() {
    return (
      <Router>
        <div className="App container-fluid p-0 m-0">

          <Navbar />

          <section>
            <Movies />
          </section>

        </div>
      </Router>
    );
  }
}

export default Browse;
