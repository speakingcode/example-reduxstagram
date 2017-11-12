const increment = (index) => {
  type: 'INCREMENT_LIKES',
  index
}

const addComment = (postId, author, comment) => {
  type: 'ADD_COMMENT',
  author,
  comment
}

const removeComment = (postId, index) => {
  type: 'REMOVE_COMMENT',
  index,
  postId
}
