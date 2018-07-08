import React, {Component} from 'react'

export default class SingleRoster extends Component {
  render () {
    return (
      <div className='single-roster' onClick={this.props.func}>
        <img src={this.props.url} alt='Roster' />
      </div>
    )
  }
}
