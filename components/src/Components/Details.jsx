import React, {Component} from 'react'
import SingleRoster from './SingleRoster'

export default class Details extends Component {
  render () {
    return (
      <div className='details'>
        <SingleRoster url={this.props.url} />
        <div className='bio'>
          <h3>{this.props.name}</h3>
          <p>{this.props.bio}</p>
        </div>
      </div>
    )
  }
}
