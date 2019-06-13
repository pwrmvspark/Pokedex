import React from 'react';
import Pokemons from './Pokemons'

const Search = (props) => {
    return (
        <div className="screen">
            {
            <Pokemons img={props.display.img} name={props.display.name} />
            }
        </div>
    )
}

export default Search;

