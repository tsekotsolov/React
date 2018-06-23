import React from 'react'
import './app.css'
import data from '../src/contacts.json'

import reRender from './index'

let click = (contact) => {
  console.log('clicked')
  reRender(contact)
}

let generateContacts = (data) => {
  let allContacts = data.map((contact, i) =>

    <div key={i} className='contact' data-id='id' onClick={e => click(data[i])}>
      <span className='avatar small'>&#9787;</span>
      <span className='title'>{contact.firstName} {contact.lastName}</span>
    </div>

  )
  return allContacts
}

const App = (contact) => (

  <div className='container'>

    <header>&#9993; Contact Book</header>
    <div id='book'>
      <div id='list'>
        <h1>Contacts</h1>
        <div className='content'>
          {generateContacts(data)}
        </div>
      </div>
      <div id='details'>
        <h1>Details</h1>
        <div className='content'>
          <div className='info'>
            <div className='col'>
              <span className='avatar'>&#9787;</span>
            </div>
            <div className='col'>
              <span className='name'>{contact.firstName}</span>
              <span className='name'>{contact.lastName}</span>
            </div>
          </div>
          <div className='info'>
            <span className='info-line'>☎ {contact.phone}</span>
            <span className='info-line'>&#9993; {contact.email}</span>
          </div>
        </div>
      </div>
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
)

let AppOnLoad = () => (

  <div className='container'>

    <header>&#9993; Contact Book</header>
    <div id='book'>
      <div id='list'>
        <h1>Contacts</h1>
        <div className='content'>
          {generateContacts(data)}
        </div>
      </div>
      <div id='details'>
        <h1>Details</h1>
      </div>
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
)

export {App, AppOnLoad}
