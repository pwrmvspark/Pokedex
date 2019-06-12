import React, { Component } from 'react';
import Search from './Search'
import PokemonList from './PokemonList'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pokedex: []
    }
  }

  addToPokedex = (pokemon) => {
    if (pokemon.name) {
      this.setState({
        pokedex: [...this.state.pokedex, pokemon]
      })      
    }
  }

  render() {
    return (
      <div className="pokedex">
        <h1 className='nav'>Ghrsea03 Pokedex</h1>
        <Search addToPokedex={this.addToPokedex}/>
        <PokemonList pokedex={this.state.pokedex}/>
      </div>
    )
  }
}


export default App;
