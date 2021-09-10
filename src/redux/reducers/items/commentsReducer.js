const SET_COMMENT = 'SET_COMMENT'
const DELETE_COMMENTS = 'DELETE_COMMENTS'

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COMMENT:
      return [...state, action.payload]
    case DELETE_COMMENTS:
      return []
    default:
      return state
  }
}

export const setComment = payload => ({ type: SET_COMMENT, payload })
export const deleteComments = () => ({ type: DELETE_COMMENTS, payload: null })
