import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

//React Router
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes.js';

class App extends Component {

  render() {
    return (
      <Provider store={store}>

      <div className="App">
        <Router>
          <div>
            <Routes />
          </div>
        </Router>
      </div>

      </Provider>
    );
  }
}

export default App;
