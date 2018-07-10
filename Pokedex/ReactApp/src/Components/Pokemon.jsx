import React, { Component } from 'react'

export default class Pokemon extends Component {
  render () {
    return (

      <div className='single-pokemon col-md'>
        <div className='bio'>
          <h3>{this.props.name}</h3>
          <p>{this.props.info}</p>
        </div>
        <div className='image'>
          <img src={this.props.image} alt='pokemon' />
        </div>
      </div>

    )
  }
}
