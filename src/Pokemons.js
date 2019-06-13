import React from 'react';

const Pokemons = (props) => {
    return (
        <div className="pokemon">
            <img src={props.img} />
            {props.name}

        </div>
    )
}

export default Pokemons;