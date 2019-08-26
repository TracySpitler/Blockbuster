import React, { Component } from 'react';
import './App.css';

//React Router
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App container-fluid p-0 m-0">

          <div className="card card-cascade header">
            <div className="view view-cascade gradient-card-header gradient py-5 rounded-bottom">
              <h1 className="card-header-title mb-3">Your Movie List</h1>
              <form className="form-inline text-center py-2 d-flex justify-content-center">
                <i className="fas fa-search" aria-hidden="true"></i>
                <input className="search form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>

          <div className="container d-flex justify-content-start">
            <h5 className="ml-3 mt-5"><strong>Recently Added</strong></h5>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
