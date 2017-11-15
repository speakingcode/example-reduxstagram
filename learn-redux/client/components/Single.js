import React from 'react'

import Photo from './Photo'
import Comments from './Comment.js'

const Single = React.createClass({
  render() {
    let { postId } = this.props.params
    let index = this.props.posts.findIndex((post) => {
      return post.code === postId
    })

    let post = this.props.posts[index]

    let postComments = this.props.comments[postId] ||  []

    return(
      <div className="single-photo">
        <Photo
          { ...this.props }
          index = { index }
          post  = { post }
        />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
})

export default Single
