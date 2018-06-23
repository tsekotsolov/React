import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let renderOnclick = () => {
  ReactDOM.render(App(), document.getElementById('root'))
}

renderOnclick()

export default renderOnclick
