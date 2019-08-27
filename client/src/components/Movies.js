import React, { Component } from 'react';

class Movies extends Component {

  state = {
    dvds: [
      {id: 7, title: "Yes Man", external_id: "tt1068680", year: "2008", backdrop_path: "/oe32Z6gfjeNldrEPQWIrW1IbSaF.jpg", video: ""},
      {id: 8, title: "Up", external_id: "tt1049413", year: "2009", backdrop_path: "/6fX7NF6IUJCTVssei7Shgl9J6LL.jpg", video: ""},
      {id: 9, title: "Avatar", external_id: "tt0499549", year: "2009", backdrop_path: "/aHcth2AXzZSjhX7JYh7ie73YVNc.jpg", video: ""},
    ],
    unwanted: [],
    keepers: [],
  };

  render() {
    const backdrop = "http://image.tmdb.org/t/p/original/";
    const movies = this.state.dvds;
    const movieList = movies.length ? (
      movies.map(movie => {
        return (
            <div key={movie.id} className="my-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <div className="view overlay rounded-top">
                  <img className="card-img-top" src={backdrop + movie.backdrop_path} alt={movie.title}/>
                  <a href={movie.video}>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="rounded-bottom text-center">
                  <ul className="list-unstyled list-inline font-small d-flex justify-content-around mt-3 mb-0">
                    <li className="list-inline-item pr-2"><a href={movie.video} className="white-text">
                      <span className="fa-stack fa-lg unwanted">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-ban fa-stack-1x fa-inverse"></i>
                      </span></a>
                    </li>
                    <li className="list-inline-item pr-2"><strong>{movie.title}</strong><br />
                      <p>({movie.year})</p>
                    </li>
                    <li className="list-inline-item"><a href={movie.video} className="white-text">
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

export default Movies;
