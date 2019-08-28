import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions/movieActions';
import PropTypes from 'prop-types';

class Movies extends Component {

  // load the movies from store.js
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const backdrop = "http://image.tmdb.org/t/p/original/";
    const movies = this.props.movies.gothrough;

    const movieList = movies.length ? (
      movies.map(movie => {
        return (
            <div key={movie.id} className="my-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="view overlay rounded-top">
                  <img className="card-img-top" src={backdrop + movie.backdrop_path} alt={movie.title}/>
                  <a href={movie.video_url}>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="rounded-bottom text-center">
                  <ul className="list-unstyled list-inline font-small d-flex justify-content-around mt-3 mb-0">
                    <li className="list-inline-item pr-2"><a href={movie.video_url} className="white-text">
                      <span className="fa-stack fa-lg unwanted">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-ban fa-stack-1x fa-inverse"></i>
                      </span></a>
                    </li>
                    <li className="list-inline-item pr-2"><strong>{movie.title}</strong><br />
                      <p>({movie.year})</p>
                    </li>
                    <li className="list-inline-item"><a href={movie.video_url} className="white-text">
                      <span className="fa-stack fa-lg keeper">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-star fa-stack-1x fa-inverse"></i>
                      </span></a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
        )
      })
    ) : (
      <p>No more movies to go through!!!</p>
    )
    return (
      <div className="container d-flex flex-wrap my-3">
        {movieList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => { dispatch({ type: 'GET_MOVIES' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
