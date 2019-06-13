import React, { Component } from 'react';
import PokemonList from "./PokemonList.js";
// import Search from "./Search.js";

const $ = require('jquery')

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
      text: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addToList = this.addToList.bind(this)
  }

  handleChange = function(event){
    this.setState ({
      text: event.target.value
    })
  }

  addToList = function (pokemon) {
    let newPokemon = {
      "name":pokemon.name,
      "img":pokemon.sprites.front_default
    }
    this.setState({
      list: [...this.state.list, newPokemon],
    })
  }

  handleSubmit = function(cb){
    if (event.key === 'Enter'){
      $.ajax({
          url: `https://pokeapi.co/api/v2/pokemon/${this.state.text}`,
          success: function(result) {
            cb(result)
            console.log(result)
          }
      })
      console.log(this.state.text)
    }
    this.state.text=""
  }

  render() {
    return (
      <div className="pokedex">
        <p className="nav">THE BEST POKEDEX EVER.</p>
        <PokemonList list={this.state.list}/>
          <div className="search"> 
            <input 
            onChange={this.handleChange} 
            onKeyPress={() => this.handleSubmit(this.addToList)} 
            value={this.state.text}
            ></input>
            <div>
              <input type="button" value="Click to search" id="search"></input>
              <input type="button" value="Click to add" id="search"></input>
            </div>
            <div className="pokedex"></div> 
          </div> 
      </div>
    )
  }
}

export default App;

