import React, { Component } from "react";
import FilmSection from "./FilmSection";
import axios from "axios";
import { NavLink } from "react-router-dom";

class FilmContainer extends Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      films: [],

      page: 1,
      newArrayFilms: [],
      isLoading: true,
      year: 2019,
      sortBy: "popularity.desc"
    };

    // console.log("1", this.prevpage);
    window.onscroll = () => {
      console.log("imside window scrool");
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight ||
        document.documentElement.scrollTop < 10
      ) {
        this.setState({
          page: this.state.page + 1
        });
        this.getMovies(this.state.page);
      }
    };
  }

  getMovies(page) {
    setTimeout(() => {
      console.log("after submit", this.state.year);
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=447926e3e81747e6e301f91aa55a11ba&page=" +
            page +
            "&primary_release_year=" +
            this.state.year +
            "&sort_by=" +
            this.state.sortBy
        )
        .then(response => {
          this.setState({
            films: [...this.state.films, ...response.data.results],

            totalItems: response.data.total_pages,
            isLoading: false
          });
        });
    }, 1000);
  }
  componentDidMount() {
    this.getMovies(this.state.page);
  }
  onChangeYear = event => {
    this.setState({ year: event.target.value });
  };
  OnChangeSort = event => {
    this.setState({ sortBy: event.target.value, isLoading: true, films: [] });

    this.getMovies(this.state.page);
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({ films: [], isLoading: true });
    this.getMovies(this.state.page);
  };
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p className="isLoading">Loading...</p>
        ) : (
          <section className="filmContainer">
            <div className="container">
              <div className="filter" onSubmit={this.onSubmit}>
                <form className="formFilter">
                  <div className="formGroup">
                    <label>Year</label>

                    <input
                      type="text"
                      placeholder="Year"
                      value={this.state.year}
                      onChange={this.onChangeYear}
                    />
                  </div>
                  <div className="formGroup">
                    <label>Sort By</label>
                    <select
                      value={this.state.value}
                      onChange={this.OnChangeSort}
                    >
                      <option value="popularity.desc" selected="selected">
                        Popularity Descending
                      </option>
                      <option value="popularity.asc">
                        Popularity Ascending
                      </option>
                      <option value="vote_average.desc">
                        Rating Descending
                      </option>
                      <option value="vote_average.asc">Rating Ascending</option>
                      <option value="primary_release_date.desc">
                        Release Date Descending
                      </option>
                      <option value="primary_release_date.asc">
                        Release Date Ascending
                      </option>
                      <option value="title.asc">Title (A-Z)</option>
                      <option value="title.desc">Title (Z-A)</option>
                    </select>
                  </div>
                </form>
              </div>

              <FilmSection films={this.state.films} />
            </div>
          </section>
        )}
      </div>
    );
  }
}

FilmContainer.defaultProps = {
  pageNumber: 1
};
export default FilmContainer;
