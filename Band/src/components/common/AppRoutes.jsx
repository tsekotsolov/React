import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NotFound from './NotFound'
import About from '../common/About'
import HeroSection from '../common/HeroSection'
import Albums from '../dynamic/Albums'
import AlbumDetails from '../dynamic/AlbumDetails'

let AppRoutes = (props) => {
  return (

    <Switch>
      <Route exact path='/' render={() => <HeroSection {...props} />} />
      <Route exact path='/about' component={About} />
      <Route exact path='/albums' component={Albums} />
      <Route exact path='/album:id' component={AlbumDetails} />
      <Route exact path='/test' component={NotFound} />
    </Switch>

  )
}

export default AppRoutes
