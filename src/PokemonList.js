import React from 'react';
import Pokemon from './Pokemon';

function PokemonList(props) {
  return (
    <div className="pokemon-list">
      <h2>My Pokemon</h2>
      { props.pokedex.map((pokemon, i) => <Pokemon key={i} {...pokemon}/>) }
    </div>
  )
}

export default PokemonList;
