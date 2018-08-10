import React, { Component } from 'react'
import {Consumer} from './context'

export default class AlbumCover extends Component {
  // cloudinaryWidget = () => {
  // window.cloudinary.openUploadWidget({cloud_name: 'tsekotsolov', sources:['local'],upload_preset: 'omtbnllk',stylesheet:'https://res.cloudinary.com/tsekotsolov/raw/upload/v1533475201/band/cloudinary.css'},

  //     (error, result) => {
  //     if(result){
  //         this.setState({
  //             cover:result[0].secure_url
  //             })
  //         }
  //     })
  // }

  render () {
    return (
      <Consumer>
        {value => {
          return (

            <div className='col-md-4'>
              <div id='avatar'>
                <img src={value.state.cover} alt='cover' />
              </div>
              <button type='button' className='btn btn-custom hvr-grow' data-toggle='modal' data-target='#exampleModalCenter' id='upload_widget_opener' onClick={value.cloudinaryWidget}>
                        Upload cover
              </button>
            </div>
          )
        }
        }
      </Consumer>
    )
  }
}
