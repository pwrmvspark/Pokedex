import React from 'react';

const Pokemon = (props) => {
    return (
        <div className="pokemon">
            <img src={props.img} />
            {props.name}
            <input type="button" value="Click to delete" id="button" onClick={() => props.delete(props.idx)}></input>
        </div>
    )
}

export default Pokemon;