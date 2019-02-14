import React, { Component } from "react";
import axios from "axios";

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      isLoadinf: false
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=447926e3e81747e6e301f91aa55a11ba&language=en-US"
      )
      .then(response => {
        this.setState({
          genres: response.data.genres,
          isLoading: false
        });
      });
  }
  renderData() {
    const { genres } = this.props;
    let newArray = [];
    this.state.genres.map(function(item) {
      let f = genres.find(i => i === item.id);
      return f ? newArray.push(` ${item.name}`) : 0;
    });
    return newArray;
  }
  render() {
    return <h4>{`${this.renderData()}`}</h4>;
  }
}

export default Genre;
