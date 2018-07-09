import React, { Component } from 'react'

export default class LoginForm extends Component {
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
 
  }

  submit = (event)=>{
    event.preventDefault()
    fetch(
      'http://localhost:5000/auth/login',
      {
        method: 'POST', 
        body: JSON.stringify(this.state.form),
        headers:{
          'Content-Type': 'application/json'
        }
      }
  ).then(data=>data.json())
   .then(response=>console.log(response))
    
  }

  render () {
    return (<form className='container'>
      <h2>Login</h2>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>Email address</label>
        <input data-name='email' onChange={this.captureInputData} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
      </div>

      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'>Password</label>
        <input data-name='password' onChange={this.captureInputData} type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
      </div>

      <button type='button' onClick={this.submit} className='btn btn-primary'>Submit</button>

    </form>)
  }
}
