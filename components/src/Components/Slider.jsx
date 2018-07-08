import React, {Component} from 'react'
import leftArrow from '../resources/left.png'
import rightArrow from '../resources/right.png'

export default class Slider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: 0,
      url: ''
    }
  }

  componentDidMount () {
    fetch('http://localhost:9999/episodePreview/' + this.state.id).then(data => {
      return data.json()
    }).then(parsedData => {
      this.setState({
        url: parsedData.url
      })
    })
  }

  roll = (id) => {

    if(id>=0&&id<=2){
      fetch('http://localhost:9999/episodePreview/' + id).then(data => {
        return data.json()
        }).then(parsedData => {
          this.setState({
            id: parsedData.id,
            url: parsedData.url
          })
        })
    }
  }

  render () {

    if(this.state.url===''){
      return <div/>
    }
    return (
      <div className='slider'>

        <div className='arrow-left'>
          <img onClick={()=>this.roll(this.state.id-1)} src={leftArrow} alt='Left Arrow' />
        </div>

        <div className='main-image'>
          <img src={this.state.url} alt='Slider' />
        </div>

        <div className='arrow-right'>
          <img onClick={()=>this.roll(this.state.id+1)} src={rightArrow} alt='Right Arrow' />
        </div>

      </div>
    )
  }
}

