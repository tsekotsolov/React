import React from 'react'
import logo from './logo.svg'
import './App.css'
import renderOnclick from './index'

let number = 0

const increment = () => {
  number++
  renderOnclick()
}

const decrement = () => {
  number--
  renderOnclick()
}

const reset = () => {
  number = 0
  renderOnclick()
}

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h1 className='App-title'>Welcome to React</h1>
    </header>
    <p className='App-intro'>
      {number}
    </p>
    <button onClick={increment}>Increase me</button>
    <button onClick={decrement}>Decrease me</button>
    <button onClick={reset}>Reset</button>
  </div>
)

export default App
