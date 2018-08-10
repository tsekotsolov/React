import React, { Component } from 'react'
import observer from '../../utils/observer'
import {Link} from 'react-router-dom'

export default class WelcomeButton extends Component {

  logout = () => observer.trigger('logout')

  render () {
    return (
      <div className='btn-group'>
        <button type='button' className='btn dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
Welcome, {localStorage.getItem('username')}!
        </button>
        <div className='dropdown-menu dropdown-menu-right'>
          <Link to='/' className='dropdown-item nav-link  a-custom-nav a-custom-nav-logout'  onClick={this.logout}>Logout</Link>
        </div>
      </div>
    )
  }
}
