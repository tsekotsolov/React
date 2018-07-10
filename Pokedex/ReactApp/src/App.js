import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpForm from './Components/SignUpForm'
import LoginForm from './Components/LoginForm'

export default class App extends Component {
  constructor (props) {
    super(props)
    let route=''
    if(localStorage.getItem('token')){
        route='loggedIn'
    }
    this.state = {
      route
    }
  }

showAppropriateComponent= ()=> {
  if(this.state.route==='login'){
    return  <LoginForm redirect={this.redirect} setlogged={this.setUserLoggedIn}/>
  }
  else if(this.state.route==='loggedIn'){
    return  <h1>User is logged</h1>  
  }
  return <SignUpForm redirect={this.redirect} />
}

redirect = ()=>{

  if(this.state.route==='login'){
    this.setState({
      route: ''
    })
  }

  else{
    this.setState({
      route: 'login'
    })
  }

}

setUserLoggedIn = ()=>{
  this.setState({
    route: 'loggedIn'
  })
}

  render () {
    return (
      <div className='App' >
      {this.showAppropriateComponent()}
      </div>
    )
  }
}


