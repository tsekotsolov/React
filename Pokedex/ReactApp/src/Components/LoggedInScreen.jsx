import React, { Component } from 'react'
import AddPokemonForm from './AddPokemonForm'
import Pokemon from './Pokemon'

export default class LogggedInScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemons: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:5000/pokedex/pokedex')
      .then(data => data.json())
      .then(data => {
        this.setState({
          pokemons: data.pokemonColection
        })
      })
  }

  render () {
    if (this.state.pokemons.length === 0) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (

        <div className='wrapper'>
          <AddPokemonForm />

          <div className='pokemons m-5'>
            { this.state.pokemons.map((pokemon, index) => {
              return <Pokemon key={index} image={pokemon.pokemonImg} name={pokemon.pokemonName} info={pokemon.pokemonInfo} />
            })}
          </div>
        </div>

      )
    }
  }
}
