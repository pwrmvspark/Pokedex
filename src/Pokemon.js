import React from 'react';

function Pokemon(props) {
  return (
    <div className="pokemon">
      <img src={props.img}/>
      <p>{props.name}</p>
    </div>
  )
}

export default Pokemon;
