import {  GET_MOVIES, ADD_MOVIE, KEEP_MOVIE, REMOVE_MOVIE } from './types';
import axios from 'axios';

// action to set the GET_MOVIES state
export const getMovies = () => dispatch => {
  axios
    .get('/api/movies')
    .then(res =>
      dispatch({
        type: GET_MOVIES,
        // send all movies
        payload: res.data
      })
    );
};

// action to ADD_MOVIE to the server
export const addMovie = (movie) => dispatch => {
  axios
    .post('/api/movies', movie)
    .then(res =>
      dispatch({
        type: ADD_MOVIE,
        // send the added movie
        payload: res.data
      })
    );
};

// action to KEEP_MOVIE from the list
export const keepMovie = (id) => dispatch => {
  axios
    .post(`/api/movies/${id}`)
    .then(res =>
      dispatch({
        type: KEEP_MOVIE,
        // send the id
        payload: id
      })
    );
};

// action to REMOVE_MOVIE from the list
export const removeMovie = (id) => dispatch => {
  axios
    .delete(`/api/movies/${id}`)
    .then(res =>
      dispatch({
        type: REMOVE_MOVIE,
        // send the id
        payload: id,
      })
    );
};
