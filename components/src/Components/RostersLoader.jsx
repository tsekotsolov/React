import React, {Component} from 'react'
import SingleRoster from './SingleRoster'
import Details from './Details'

export default class RostersLoader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      allRosters: [],
      selectedRoster:{}
    }
  }

  componentDidMount () {
    fetch('http://localhost:9999/roster').then(data => {
      return data.json()
    }).then(parsedData => {
      this.setState({
        allRosters: parsedData,
        selectedRoster:
        {
          id: parsedData[0].id,
          url: parsedData[0].url,
          bio: parsedData[0].bio,
          name: parsedData[0].name
        }
      })
    })
  }

  fetchRosterData = (id) =>{
    fetch('http://localhost:9999/character/' + id).then(data => {
      return data.json()
    }).then(parsedData => {
      this.setState({
        selectedRoster:
        {
          id: parsedData.id,
          url: parsedData.url,
          bio: parsedData.bio,
          name: parsedData.name
        }
      })
    })
  }

  render () {

    if(Object.keys(this.state.selectedRoster).length === 0){
      return <div>Loading...</div>
    }

    return (
      <div className='wrapper'>
        <div className='rosters' >
          { this.state.allRosters.map(roster => {
            return <SingleRoster url={roster.url} key={roster.id} func={()=>this.fetchRosterData(roster.id)}/>
          })}
        </div>
        <Details 
            url={this.state.selectedRoster.url} 
            name={this.state.selectedRoster.name} 
            bio={this.state.selectedRoster.bio} />
      </div>
    )
  }
}
