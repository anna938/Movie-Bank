import React from "react";
import Genre from "./Genre";
import { NavLink } from "react-router-dom";

let Film = props => {
  // console.log("hello");
  // console.log(props.filmsDetail);
  let filmsDetail = {
    title: props.filmsDetail.title,
    desc: props.filmsDetail.overview,
    Img: props.filmsDetail.poster_path
      ? "https://image.tmdb.org/t/p/w185/" + props.filmsDetail.poster_path
      : "https://via.placeholder.com/350x150",

    genres: props.filmsDetail.genre_ids,
    movieId: props.filmsDetail.id
  };

  return (
    <div className="film">
      <div className="filmImg">
        <img src={filmsDetail.Img} alt={filmsDetail.title} />
      </div>

      <div className="filmDesc">
        <h2 className="mHeading">{filmsDetail.title}</h2>

        <Genre genres={filmsDetail.genres} />
        <p>{`${filmsDetail.desc.substr(0, 200)}...`}</p>
      </div>
      <div className="readMore">
        <NavLink to={`/movie/${filmsDetail.movieId}`} className="btn">
          Read More
        </NavLink>
      </div>
    </div>
  );
};
export default Film;
