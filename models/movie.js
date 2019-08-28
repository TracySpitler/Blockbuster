// Movie Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MovieSchema = new Schema({

    backdrop_path: {
      type: String,
      required: false
    },
    created_at: {
      type: Date,
      required: false
    },
    genres: [{
      id : Number,
      name : String
    }],
    id: {
      type: Number,
      required: true
    },
    imdb_id: {
      type: String,
      required: false
    },
    keeper: {
      type: Boolean,
      required: false
    },
    original_title: {
      type: String,
      required: false
    },
    overview: {
      type: String,
      required: false
    },
    poster_path: {
      type: String,
      required: false
    },
    release_date: {
      type: Date,
      required: false
    },
    runtime: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    updated_at: {
      type: Date,
      required: true
    },
    video_url: {
      type: String,
      required: false
    },

});

MovieSchema.pre('save', function(next) {
  // create new date
  var currentDate = new Date();
  // set the updated date to right now
  this.updated_at = currentDate;
  // if their is no created date set it to now
  if(!this.created_at) {
    this.created_at = currentDate;
  }
  // save the model to the database
  next();
})

module.exports = Movie = mongoose.model('movie', MovieSchema);
