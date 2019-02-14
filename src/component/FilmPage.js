import React, { Component } from "react";
import Cast from "./Cast";
import axios from "axios";
class FilmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      genres: [],
      casts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.movieId +
          "?api_key=447926e3e81747e6e301f91aa55a11ba&append_to_response=credits"
      )
      .then(response => {
        this.setState({
          film: response.data,
          genres: response.data.genres,
          casts: response.data.credits.cast
        });
      });
  }

  render() {
    let genres = this.state.genres.map(function(item) {
      return `${item.name}, `;
    });
    let casts = this.state.casts.map(function(item, i) {
      return <Cast casts={item} key={i} />;
    });

    return (
      <div>
        <section className="filmDetailsHeader">
          <div className="container">
            <div className="filmDetailsSection">
              <div className="filmDetailsImg">
                <img
                  src={
                    this.state.film.poster_path
                      ? "https://image.tmdb.org/t/p/w300/" +
                        this.state.film.poster_path
                      : "https://via.placeholder.com/350x150"
                  }
                  alt=""
                />
              </div>

              <div className="filmDetailsInfo">
                <h1 className="lgHeading">
                  {this.state.film.title}
                  <h4 className="releaseDate">{`Release Date: ${
                    this.state.film.release_date
                  }`}</h4>
                </h1>
                <h4 className="genre">{`Genre: ${genres}`}</h4>
                <p className="tagline">
                  {this.state.film.tagline ? this.state.film.tagline : ""}
                </p>

                <div className="filmDetailsOverview">
                  <h3 className="mHeading">Overview:</h3>
                  <p>{this.state.film.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="filmDetailsCasts">
          <div className="container">
            <div className="castSectionTitle">
              <h2 className="lgHeading">Casts</h2>
            </div>
            <div className="filmCasts">{casts}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default FilmPage;
