import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt={name} src={`https://robohash.org/name+${id}?size=200x200`} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
