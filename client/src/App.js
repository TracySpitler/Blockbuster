import React, { Component } from 'react';
import './App.css';

//React Router
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
