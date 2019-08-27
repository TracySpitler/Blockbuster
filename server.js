// include dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// initialize express
const app = express();

// middleware
app.use(bodyParser.json());

// connect to the database
const db = require('./config/mongoose');

// routes
const index = require('./routes/index');
app.use('/', index);

// serve static assets (build) if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  //load index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// export the app
module.exports = app;
