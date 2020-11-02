import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";
import StarwarsViewer from "../StarWarsViewer";

function getRandomPokemonId() {
  return Math.floor(Math.random() * 151) + 1;
}

function App() {
  const [id, setId] = useState(getRandomPokemonId());
  const [search, setSearch] = useState("");

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    setId(getRandomPokemonId());
  }

  return (
    <div className="App">
      <div className="pokemon-app">
        <h1>Pokemon app</h1>
        <button onClick={handleClick}>Get Random Pokemon</button>
        <PokemonViewer id={id} />
      </div>
      <div className="starwars-app">
        <h1>Starswars app</h1>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <StarwarsViewer search={search} />
      </div>
    </div>
  );
}

export default App;
