/*

## Task 3:

Display your data! You will find the name, as well as images within the response. Console.log is your friend!
*/

import React, { useEffect, useState } from "react";
import "./PokemonViewer.css";

function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  return (
    <div className="pokemon-viewer">
      {pokemon ? (
        <>
          <h1>{pokemon?.name}</h1>
          <img src={pokemon?.sprites?.front_shiny} alt="pokemon" />
          <h4>Abilities</h4>
          <ul className="abilities-list">
            {pokemon.abilities.map(({ ability }) => {
              return <li key={ability.name}>{ability.name}</li>;
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default PokemonViewer;
