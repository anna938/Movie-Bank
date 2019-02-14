import React, { Component } from "react";
import axios from "axios";
import OtherFilms from "./OtherFilms";

class CastPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cast: [],
      castMovies: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://api.themoviedb.org/3/person/" +
          this.props.castId +
          "?api_key=447926e3e81747e6e301f91aa55a11ba&append_to_response=movie_credits"
      )
      .then(response => {
        this.setState({
          cast: response.data,
          castMovies: response.data.movie_credits.cast
        });
      });
  }

  render() {
    let films = this.state.castMovies.map(function(item, i) {
      console.log(item);
      return <OtherFilms film={item} key={i} />;
      //   return <p>hello</p>;
    });
    return (
      <div>
        <section className="castDetailsHeader">
          <div className="container">
            <div className="castDetailsSection">
              <div className="castDetailsImg">
                <img
                  src={
                    this.state.cast.profile_path
                      ? "https://image.tmdb.org/t/p/w300/" +
                        this.state.cast.profile_path
                      : "https://via.placeholder.com/350x150"
                  }
                  alt=""
                />
              </div>

              <div className="castDetailsInfo">
                <h1 className="lgHeading">{this.state.cast.name}</h1>

                <div className="biography">
                  <h3 className="mHeading">Biography:</h3>
                  <p>{this.state.cast.biography}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="castFilms">
          <div className="container">
            <div class="castSectionTitle">
              <h2 class="lgHeading">Known For</h2>
            </div>
            <div className="filmCasts">{films}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default CastPage;
