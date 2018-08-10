import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import modifyDate from '../../utils/modifyDate'

export default class Comment extends Component {

  constructor(props) {
    super(props)
    this.state={
      data:{}
    }
  }

  captureInputData = (event)=>{  

    
    if(localStorage.username&&localStorage.username!=='defaultUser'){

      console.log(this.state.data)
      event.target.style.color='red'
      event.target.style.border='red solid'
      document.getElementById('submit').classList.add('disabled-button')
  
      if(event.target.value.length>=10){
  
        event.target.style.color='green'
        event.target.style.border='green solid'
        document.getElementById('submit').classList.remove('disabled-button')
        this.setState({
          data:{
            author:localStorage.getItem('username'),
            content:event.target.value,
            commentId:this.props._id          
          }
        })
      }
      else{
        this.setState({
          data:{}
        })
      }
    }
  
  }

  
  
  revealEdit = (event)=>{
    event.preventDefault()
    let textarea = document.getElementById(event.target.dataset.id)
    let button = document.querySelectorAll(`[data-id="${event.target.dataset.id}"]`)
    button[0].style.display='inline-block'
    textarea.classList.add('psuedo-textarea-edit')
    textarea.disabled=false
  }
  render () {
    
    return (
      <article key={this.props._id}className='comment'>
        <div className='image-content'>
          <div className='avatar'>

            <img src={localStorage.getItem('avatar')} alt='avatar' />

          </div>

          <form className='post-content'>

            <textarea disabled className='post-message psuedo-textarea' id={this.props._id} defaultValue={this.props.content} onChange={this.captureInputData} />
            <Link to='#' className='btn btn-custom hvr-grow m-2 disabled-button' data-id={this.props._id} >Submit</Link>
          </form>
        </div>

        <div className='details'>
          <div className='info'>
          submitted {modifyDate(this.props._kmd.ect)} ago by {this.props.author}
          </div>
          <div className='controls'>
            <Link to='#' className='editLink ' onClick={this.revealEdit} data-id={this.props._id}>edit</Link>
            <Link to='#' className='deleteLink' >delete</Link>
          </div>
        </div>
      </article>
    )
  }
}
