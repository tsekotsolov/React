import React, { Component } from 'react'

export default class Pokemon extends Component {
  render () {
    return (

      <div className='single-pokemon col-md-2 m-1 '>
        <div className='bio'>
          <h6>{this.props.name}</h6>
          <p>{this.props.info}</p>
        </div>
        <div className='image'>
          <img src={this.props.image} alt='pokemon' />
        </div>
      </div>

    )
  }
}
