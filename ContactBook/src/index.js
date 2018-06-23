
import ReactDOM from 'react-dom'
import './index.css'
import {App, AppOnLoad} from './App'

let contact = false

let reRender = (contact) => {
  ReactDOM.render(App(contact), document.getElementById('root'))
}

if (contact) {
  reRender(contact)
} else {
  ReactDOM.render(AppOnLoad(), document.getElementById('root'))
}

export default reRender
