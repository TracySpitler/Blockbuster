import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions/movieActions';
import axios from 'axios';

class AddMovie extends Component {

  // function for input change
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // add item from modal
  onSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      imdb_id: this.state.imdb_id,
      video_url: this.state.video_url,
    };
    console.log("testing");
    axios
      .get('https://api.themoviedb.org/3/find/' + newMovie.imdb_id + '?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3&language=en-US&external_source=imdb_id')
      .then(res => {

        // filter just the year
        var release_date = res.data.movie_results[0].release_date;
        var year = release_date.slice(0, 4);

        newMovie.year = year;
        newMovie.title = res.data.movie_results[0].title;
        newMovie.backdrop_path = res.data.movie_results[0].backdrop_path;
        newMovie.poster_path = res.data.movie_results[0].poster_path;
        newMovie.release_date = res.data.movie_results[0].release_date;
        newMovie.overview = res.data.movie_results[0].overview;

        // add item via addMovie action
        //this.props.addMovie(newMovie);
      });
  }

  render() {
    return(
      <div>
        <button type="button" className="btn" data-toggle="modal" data-target="#addMovieModal">
          Add a Movie
        </button>

        <div className="modal fade left white-text" id="addMovieModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

          <div className="modal-dialog modal-full-height modal-left" role="document">


            <div className="modal-content">
              <div className="modal-header gradient">
                <h4 className="modal-title w-100" id="myModalLabel">Add a Movie</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span className="white-text" aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input type="text" id="input_imbd_id" className="form-control mb-4" placeholder="Imdb Id" name="imdb_id" onChange={this.onChange.bind(this)} />
                <input type="text" id="input_video_url" className="form-control mb-4" placeholder="Video Url" name="video_url" onChange={this.onChange.bind(this)} />

              </div>
              <div className="modal-footer justify-content-center">
                <button type="submit" onClick={this.onSubmit} data-dismiss="modal" value="Submit" className="btn btn-primary">Save Movie</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (newMovie) => { dispatch(addMovie(newMovie)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
