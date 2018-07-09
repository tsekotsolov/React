import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpForm from './Components/SignUpForm'
import LoginForm from './Components/LoginForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      route: ''
    }
  }

showAppropriateComponent= ()=> {
  if(this.state.route==='login'){
    return  <LoginForm />
  }
  return <SignUpForm />
}

  render () {
    return (
      <div className='App' >
      {this.showAppropriateComponent()}
      </div>
    )
  }
}

export default App
