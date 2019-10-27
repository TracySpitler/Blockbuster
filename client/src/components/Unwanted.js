import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, keepMovie } from '../actions/movieActions';

class Unwanted extends Component {

  componentDidMount() {
    this.props.getMovies();
  }

  handleKeep = (e) => {
    this.props.keepMovie(e.target.id);
  }

  render() {
    const movies = this.props.movies.unwanted;

    const movieList = movies.length ? (
      movies.map(movie => {
        const youtube = "http://www.youtube.com/watch_popup?v=" + movie.video_url;
        return (
            <div key={movie._id} className="my-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="view overlay rounded-top">
                  <img className="card-img-top" src={movie.backdrop_path} alt={movie.title}/>
                  <a className="video" href={youtube}>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="rounded-bottom text-center">
                  <ul className="list-unstyled list-inline font-small d-flex justify-content-around mt-3 mb-0">
                    <li className="list-inline-item pr-2">
                      <span className="fa-stack fa-lg unwanted-removed">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-ban fa-stack-1x fa-inverse"></i>
                      </span>
                    </li>
                    <li className="list-inline-item pr-2"><strong>{movie.title}</strong><br />
                      <p>({movie.year})</p>
                    </li>
                    <li className="list-inline-item">
                      <span className="fa-stack click fa-lg keeper">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i id={movie._id} onClick={this.handleKeep} className="fas fa-star fa-stack-1x fa-inverse"></i>
                      </span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
        )
      })
    ) : (
      <p>No unwanted movies..yet..</p>
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
    getMovies: () => { dispatch(getMovies()) },
    keepMovie: (id) => { dispatch(keepMovie(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Unwanted);
