import React, { Component } from 'react'
import AlbumCover from './AlbumCover'
import {Provider} from './context'

class AddAlbum extends Component {
  render () {
    return (
      <Provider>
        <section className='profile'>
          <div className='container text-center'>
            <h2>Add Album</h2>
            <div className='row justify-content-center'>
              <AlbumCover />
            </div>
          </div>
        </section>
      </Provider>
    )
  }
}

export default AddAlbum
