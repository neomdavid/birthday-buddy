import React from "react";

const Person = (person) => {
  return (
    <section key={person.id} className="person">
      <img src={person.image}></img>
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </section>
  );
};

export default Person;
