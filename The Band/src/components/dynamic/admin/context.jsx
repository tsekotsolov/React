import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component{

  state = {
    cover:'https://res.cloudinary.com/tsekotsolov/image/upload/v1533743283/wb7l5z43st94azl81r6f.png',
    tracks:[],
  }

  actions = {
    cloudinaryWidget:() => {
      window.cloudinary.openUploadWidget({cloud_name: 'tsekotsolov', sources:['local'],upload_preset: 'omtbnllk',stylesheet:'https://res.cloudinary.com/tsekotsolov/raw/upload/v1533475201/band/cloudinary.css'},
  
          (error, result) => { 
          if(result){
              this.setState({
                  cover:result[0].secure_url
                  })
              }
          })
      }
  }

  render(){
    return(
    <Context.Provider value={{
      state:this.state,
      cloudinaryWidget:this.actions.cloudinaryWidget}}>
      {this.props.children}
    </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
