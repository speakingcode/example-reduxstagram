import React from 'react'

import Photo from './Photo'

const PhotoGrid = React.createClass({
  render() {
    return(
      <div className="photo-grid">
        {
          this.props.posts.map((post) => (
              <Photo
                {...this.props}
                key   = {index}
                index = {index}
                post  = {post}
              />
          ))
        }
      </div>
    )
  }
})

export default PhotoGrid
