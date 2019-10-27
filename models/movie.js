// Movie Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MovieSchema = new Schema({

    backdrop_path: {
      type: String,
      required: false,
      default: "https://screenrant.com/wp-content/uploads/2017/12/Deadpool-2-Cable-banner.jpg"
    },
    created_at: {
      type: Date,
      required: false
    },
    imdb_id: {
      type: String,
      required: false,
    },
    keeper: {
      type: Boolean,
      required: false,
      default: null
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
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    updated_at: {
      type: Date,
      required: false
    },
    video_url: {
      type: String,
      required: false,
      default: "tgbNymZ7vqY"
    },
    year: {
      type: Number,
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

module.exports = Movie = mongoose.model('movie', MovieSchema, 'movies');
