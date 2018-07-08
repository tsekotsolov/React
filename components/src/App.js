import React, { Component } from 'react'
import './App.css'
import Slider from './Components/Slider'
import RostersLoader from './Components/RostersLoader'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Slider />
        <RostersLoader />
      </div>
    )
  }
}
