import React, { Component } from 'react'

export default class PokemonForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {}
    }
  }

  captureInputData = (event)=>{  
    
    let fieldName = event.target.dataset.name
    let fieldValue = event.target.value
    let inputDataObj = {}
    inputDataObj[fieldName] = fieldValue

    this.setState({
      form:Object.assign(this.state.form,inputDataObj)
    })

    console.log(this.state.form);
 
  }

  submit = (event)=>{
    event.preventDefault()
    fetch(
      'http://localhost:5000/pokedex/create',
      {
        method: 'POST', 
        body: JSON.stringify(this.state.form),
        headers:{
          'Content-Type': 'application/json'
        }
      }
  ).then(data=>data.json())
   .then(response=>{
       console.log(response)
   })} 

  render () {
    return (
    <form className='container'>
      <h2>Create Pokemon</h2>
      <div className='form-group'>
        <label htmlFor='input-pokename'>Pokemon name</label>
        <input data-name='pokemonName' onChange={this.captureInputData} type='email' className='form-control' id='input-pokename' aria-describedby='emailHelp' placeholder='Enter pokemon name' />
      </div>

      <div className='form-group'>
        <label htmlFor='input-pokeImg'>Pokemon Image</label>
        <input data-name='pokemonImg' onChange={this.captureInputData} type='email' className='form-control' id='input-pokeImg' aria-describedby='emailHelp' placeholder='Insert image URL' />
      </div>

      <div className='form-group'>
        <label htmlFor='pokename'>Pokemon Info</label>
        <input data-name='pokemonInfo' onChange={this.captureInputData} type='email' className='form-control' id='input-pokeInfo' aria-describedby='emailHelp' placeholder='Add pokemon info' />
      </div>

     
      <button type='button' onClick={this.submit} className='btn btn-primary'>Create pokemon</button>

    </form>)
  }
}