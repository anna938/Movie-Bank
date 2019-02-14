import React from "react";
import { NavLink } from "react-router-dom";

let Cast = props => {
  return (
    <div className="cast">
      <img
        alt=""
        src={
          props.casts.profile_path
            ? "https://image.tmdb.org/t/p/w185/" + props.casts.profile_path
            : "https://via.placeholder.com/185x278"
        }
      />
      <h4>{props.casts.name}</h4>
      <NavLink to={`/cast/${props.casts.id}`} className="btn btnCast">
        Read More{" "}
      </NavLink>
    </div>
  );
};
export default Cast;
