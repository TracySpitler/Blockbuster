const express = require('express');
const router = express.Router();

// Movie Model
const Movie = require('../../models/movie');

// @route GET api/movies
// @desc Get All Movies
// @access Public
router.get('/', (req, res) => {
  Movie.find()
    .sort({ updated_at: -1 })
    .then(movies => res.json(movies));
});

// @route POST api/movies
// @desc Create a Movie
// @access Public
router.post('/', (req, res) => {

  const newMovie = new Movie({
    backdrop_path: req.body.backdrop_path,
    poster_path: req.body.poster_path,
    imdb_id: req.body.imdb_id,
    keeper: req.body.keeper,
    title: req.body.title,
    video_url: req.body.video_url,
    release_date: req.body.release_date,
    overview: req.body.overview,
    year: req.body.year
  });

  newMovie.save().then(movie => res.json(movie));
});

// @route POST api/movies
// @desc Update a Movie (keeper)
// @access Public
router.post('/:id', (req, res) => {
  Movie.findById(req.params.id, function(err, keep) {
    if (err) {
      // send errors
      res.send({err});
    }
    // update the movie
    keep.keeper = 1;
    // save the movie
    keep.save().then(keep => res.json(keep));
  });
})

// @route DELETE api/movies
// @desc Remove a Movie (unwanted) (no deleting from db)
// @access Public
router.delete('/:id', (req, res) => {
  Movie.findById(req.params.id, function(err, remove) {
    if (err) {
      // send errors
      res.send({err});
    }
    // update the movie
    remove.keeper = 0;
    // save the movie
    remove.save().then(remove => res.json(remove));
  });
})

module.exports = router;
