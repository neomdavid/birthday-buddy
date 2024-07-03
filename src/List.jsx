import React from "react";
import Person from "./Person";
const List = ({ people }) => {
  return (
    <article>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </article>
  );
};

export default List;
