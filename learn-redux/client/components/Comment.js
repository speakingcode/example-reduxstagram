import React from 'react'

const Comments = React.createClass({
  handleSubmit(event) {
    event.preventDefault()
    console.log("submitting form")
  },
  renderComment(comment, index) {
    return(
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },
  render() {
    return(
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}

        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="test" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
})

export default Comments
