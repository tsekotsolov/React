import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  greetUser (message, name) {
    return message + ',' + ' ' + name
  }

  generateListItems (arr) {
    const listItems = arr.map((member, i) =>
      <li key={i}>{member}</li>
    )
    return listItems
  }

  createClock () {
    const element = <h1>Current time: {new Date().toLocaleTimeString()}</h1>

    return element
  }

  render () {
    const familyArr = ['Tseko', 'Ira', 'Angi', 'Tsveti', 'Rosi']
    return (
      <div className='App'>

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>{this.greetUser('Welcome', 'Tsolov')}</h1>
        </header>

        <ul className='family-list'>{this.generateListItems(familyArr)}</ul>

        {this.createClock()}
      </div>

    )
  }
}

export default App
