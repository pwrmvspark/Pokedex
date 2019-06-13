import React from 'react';
import Pokemon from "./Pokemon"

const PokemonList = (props) => {
    return (
        <div className="pokemon-list">
            {props.list.map((mons, i) => <Pokemon key={i} img={mons.img} name={mons.name} idx={i} delete={props.delete}/>)}
            
        </div>
    )
}

export default PokemonList;
