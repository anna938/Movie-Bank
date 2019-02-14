import React from "react";

export default function OtherFilms(props) {
  return (
    <div className="cast">
      <img
        alt=""
        src={
          props.film.poster_path
            ? "https://image.tmdb.org/t/p/w185/" + props.film.poster_path
            : "https://via.placeholder.com/185x278"
        }
      />
      <h4>{props.film.title}</h4>
    </div>
  );
}
