import React, { Component } from 'react'
import Pokemon from './Pokemon'
const api_url = 'https://pokeapi.co/api/v2'

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      result: {}
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value, result: {} })
    this.fetchPokemon(e.target.value)
  }

  fetchPokemon = (search) => {
    fetch(`${api_url}/pokemon/${search}`)
      .then(res => res.json())
      .then(data => {
        const pokemon = { name: data.name, img: data.sprites.front_default }
        console.log(pokemon);
        this.setState({ result: pokemon })
      })
      .catch(err => {
        console.error(`Pokemon ${search} not found.`)
      })
  }

  addPokemon = () => {
    this.props.addToPokedex(this.state.result)
    this.setState({ result: {}, search: '' })
  }

  render() {
    const { name, img } = this.state.result
    return (
      <div className='search'>
        <div className='screen'>
          <Pokemon name={name} img={img} />
        </div>
        <h2>Search that pokemon:</h2>
        <input type="text" value={this.state.search} onChange={this.handleChange}/>
        <button onClick={this.addPokemon}>Add</button>
      </div>
    )
  }
}