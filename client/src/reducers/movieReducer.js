import {  GET_MOVIES, ADD_MOVIE, DELETE_MOVIE } from '../actions/types';

const backdrop = "http://image.tmdb.org/t/p/original/";
const initialState = {
  movies: [
    {id: 7, title: "Yes Man", external_id: "tt1068680", year: "2008", backdrop_path: "/oe32Z6gfjeNldrEPQWIrW1IbSaF.jpg", video: ""},
    {id: 8, title: "Up", external_id: "tt1049413", year: "2009", backdrop_path: "/6fX7NF6IUJCTVssei7Shgl9J6LL.jpg", video: ""},
    {id: 9, title: "Avatar", external_id: "tt0499549", year: "2009", backdrop_path: "/aHcth2AXzZSjhX7JYh7ie73YVNc.jpg", video: ""},
  ],
  unwanted: [],
  keepers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
