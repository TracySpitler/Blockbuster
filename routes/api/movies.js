const express = require('express');
const router = express.Router();

// Movie Model
const Movie = require('../../models/movie');

// @route GET api/movies
// @desc Get All Movies
// @access Public
router.get('/', (req, res) => {

  Movie.find()
    .sort({ date: -1 })
    .then(movies => res.json(movies));
});

// @route GET api/movies
// @desc Get ONE Movie
// @access Public
router.get('/:id', (req, res) => {

  Movie.findById(req.params.id)
    .then(movie => res.json(movie));
});

// @route POST api/movies
// @desc Create a Movie
// @access Public
router.post('/', (req, res) => {

  const newMovie = new Movie({
    backdrop_path: req.body.backdrop_path,
    genres: req.body.genres,
    id: req.body.id,
    imdb_id: req.body.imdb_id,
    keeper: req.body.keeper,
    original_title: req.body.original_title,
    overview: req.body.overview,
    poster_path: req.body.poster_path,
    release_date: req.body.release_date,
    runtime: req.body.runtime,
    title: req.body.title,
    video_url: req.body.video_url
  });

  newMovie.save().then(movie => res.json(movie));
});

// @route DELETE api/movies
// @desc Delete a Movie
// @access Public
router.delete('/:id', (req, res) => {

  Movie.findById(req.params.id)
    // Callback returns a successful or unsuccessful movie deletion
    .then(movie => movie.remove().then(() => res.json({success: "Movie deleted successfully"})))
    .catch(err => res.status(404).json({error: "Error when deleting movie"}));
})

module.exports = router;
