import {  GET_MOVIES, ADD_MOVIE, REMOVE_MOVIE, KEEP_MOVIE } from '../actions/types';

const initialState = {
  gothrough: [],
  unwanted: [],
  keepers: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        // filter the movies based on keeper status
        gothrough: action.payload.filter(movie => {return movie.keeper === null}),
        unwanted: action.payload.filter(movie => {return movie.keeper === false}),
        keepers: action.payload.filter(movie => {return movie.keeper === true}),
      };
    case ADD_MOVIE:
      return {
        ...state,
        gothrough: [action.payload, ...state.gothrough],
        unwanted: [action.payload, ...state.unwanted],
        keepers: [action.payload, ...state.keepers],
      };
    case KEEP_MOVIE:
      return {
        ...state,
        gothrough: state.gothrough.filter(movie => movie._id !== action.payload),
        unwanted: state.unwanted.filter(movie => movie._id !== action.payload)
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        gothrough: state.gothrough.filter(movie => movie._id !== action.payload),
        keepers: state.keepers.filter(movie => movie._id !== action.payload)
      };
    default:
      return state;
  }
}
