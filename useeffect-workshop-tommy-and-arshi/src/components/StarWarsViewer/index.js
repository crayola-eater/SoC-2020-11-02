/*
Have a component that takes in a search and displays the array of results from sending a request to this api:
`https://swapi.dev/api/people?search={search}`
*/

import React, { useEffect, useState } from "react";
import "./StarwarsViewer.css";

function StarwarsViewer({ search }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!

  const [starwars, setStarwars] = useState();

  useEffect(() => {
    if (search) {
      fetch(`https://swapi.dev/api/people?search=${search}`)
        .then((response) => response.json())
        .then((data) => setStarwars(data));
    }
  }, [search]);

  return (
    <div className="starwars-viewer">
      <h1>{search}</h1>
      <ul>
        {starwars?.results
          .filter((result) =>
            result.name.toLowerCase().startsWith(search.toLowerCase())
          )
          .map(({ name, created }) => {
            return <li key={`${name}${created}`}>{name}</li>;
          })}
      </ul>
    </div>
  );
}

export default StarwarsViewer;
