import React, { Component } from 'react'
import requester from '../../utils/requester'
import observer from '../../utils/observer'
import Comments from './Comments'

export default class AlbumDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {album: {}}
  }

  componentDidMount () {
    observer.trigger('loading')
    let id = this.props.match.params.id
    requester.fetchSingleAlbum(id).then((response) => {
      this.setState({
        album: response
      })
      observer.trigger('loading')
    })
  }

  render () {
    if (this.state.album.error) {
      return (
        <h1>Error</h1>
      )
    }

    if (!this.state.album.url) {
      return (
        null
      )
    }

    return (
      <section className='album'>
        <div className='container text-center'>

          <h2>{this.state.album.title}</h2>

          <div className='row justify-content-center'>

            <div className='col-md-4'>
              {this.state.album.url
                ? <img src={this.state.album.url} alt='album cover' />
                : null
              }
              <p>released {this.state.album.year}</p>
            </div>

            <div className='col-md-4 track-container'>

              <div className='tracks'>
                {this.state.album.tracks
                  ? this.state.album.tracks.map((track, i) => {
                    return <p className='track' key={i}>{i + 1}. {track} </p>
                  })
                  : null
                }
              </div>
            </div>

            <div className='col-md-4' />
          </div>
          <Comments postId={this.props.match.params.id} />
        </div>
      </section>
    )
  }
}
