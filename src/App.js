import React, { Component } from 'react';
import PokemonList from "./PokemonList.js";
import Search from "./Search.js";

const $ = require('jquery')

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
      text: "",
      display: {
                name: "",
                img: ""
                }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addToList = this.addToList.bind(this)
    this.addToScreen = this.addToScreen.bind(this)
    this.deleteMon = this.deleteMon.bind(this)
  }

  deleteMon = function (i){
    const leftArr = this.state.list.slice(0, i)
    const rightArr = this.state.list.slice(i + 1)

    this.setState ({
      list: [...leftArr, ...rightArr]
    })
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
      "text": ""
    })
  }

  addToScreen = function (pokemon) {
    let nuPokemon = {
      "name": pokemon.name,
      "img": pokemon.sprites.front_default
    }
    this.setState({
      display: nuPokemon
    })
  }

  handleSubmit = function(cb, click){
      $.ajax({
          url: `https://pokeapi.co/api/v2/pokemon/${this.state.text}`,
          success: function(result) {
            cb(result)
          }
      })
  }

  render() {
    return (
      <div className="pokedex">
        <p className="nav">THE BEST POKEDEX EVER.</p>
        <PokemonList list={this.state.list} delete={this.deleteMon}/>
          <form className="search" onSubmit={(e) => {
            e.preventDefault()
            this.handleSubmit(this.addToScreen)
          }}>
            
            <Search className="screen" display={this.state.display}/>
            <input
            onChange={this.handleChange} 
            value={this.state.text}
            />
            <div>
              <input type="submit" value="Click to search" id="button"/>
              <input type="button" value="Click to add" id="button" onClick={() => this.handleSubmit(this.addToList, true)}/>
            </div>
           
          </form> 
      </div>
    )
  }
}

export default App;

