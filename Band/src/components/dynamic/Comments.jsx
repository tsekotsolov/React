import React, { Component } from 'react'
import requester from '../../utils/requester'
import Comment from './Comment'
import CommentForm from '../forms/CommentForm'

export default class Comments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  componentDidMount () {
    requester.fetchComments(this.props.postId).then((response) => {
      this.setState({
        comments: response.reverse()
      })
    })
  }

  postUpdater = (post)=>{

    let coms = this.state.comments
    coms.unshift(post)
    
   
      this.setState({
        comments:coms
      })
  }

  render () {
    return (

      <div>
        <CommentForm postId={this.props.postId} postUpdater={this.postUpdater}/>
        <div className='row justify-content-center'>

          <div className='col-md-12'>
            <h5>Comments</h5>
            <div className='overflow' >
              {this.state.comments.map((comment) => {
                return <Comment key={comment._id} {...comment} />
              })}
            </div>
          </div>
        </div>

      </div>
    )
  }
}
