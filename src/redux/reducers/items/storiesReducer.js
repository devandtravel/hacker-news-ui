const SET_STORY = 'SET_STORY'
const DELETE_STORIES = 'DELETE_STORIES'

export const storiesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STORY:
      return [...state, action.payload]
    case DELETE_STORIES:
      return []
    default:
      return state
  }
}

export const setStory = payload => ({ type: SET_STORY, payload })
export const deleteStories = () => ({ type: DELETE_STORIES, payload: null })
