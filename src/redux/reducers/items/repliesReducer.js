const SET_REPLY = 'SET_REPLY'

export const repliesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_REPLY:
      return [...state, action.payload]
    default:
      return state
  }
}

export const setReply = payload => ({ type: SET_REPLY, payload })
