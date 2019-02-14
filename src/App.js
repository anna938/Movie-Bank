import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import FilmContainer from "./component/FilmContainer";
import FilmPage from "./component/FilmPage";
import CastPage from "./component/CastPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={FilmContainer} />
          <Route
            path="/movie/:movieId"
            exact
            render={props => {
              let { movieId } = props.match.params;
              return <FilmPage movieId={movieId} />;
            }}
          />
          <Route
            path="/cast/:castId"
            exact
            render={props => {
              let { castId } = props.match.params;

              return <CastPage castId={castId} />;
            }}
          />

          <Route
            path="/:pageNumber"
            exact
            render={props => {
              let { pageNumber } = props.match.params;

              return <FilmContainer pageNumber={pageNumber} />;
            }}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
