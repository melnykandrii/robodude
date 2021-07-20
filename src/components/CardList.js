import React from "react";
import Card from "./Card";

export const CardList = ({ robots }) => {
  if (true) {
    throw new Error("Miss card Data");
  }
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
