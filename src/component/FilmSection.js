import React from "react";
import Film from "./Film";

let FilmSection = props => {
  return (
    <div className="filmSection">
      {props.films.map((item, i) => {
        return <Film key={i} filmsDetail={item} />;
      })}
    </div>
  );
};
export default FilmSection;
