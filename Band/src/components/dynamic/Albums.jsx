import React, { Component } from 'react'
import Album from './Album'
import requester from '../../utils/requester'
import observer from '../../utils/observer'

export default class Albums extends Component {
  constructor (props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  componentDidMount () {
    observer.trigger('loading')

    requester.fetchAllAlbums()
      .then(response => {
        observer.trigger('loading')
        this.setState({
          albums: response
        })
      })
  }

  render () {

    return (
      <section className='albums'>
        <div className='container text-center'>
          <h2>ALBUMS</h2>

          <div className='row justify-content-center'>

            { this.state.albums.map((album) => {
              return <Album key={album._id} {...album} />
            })}

          </div>

        </div>
      </section>
    )
  }
}
