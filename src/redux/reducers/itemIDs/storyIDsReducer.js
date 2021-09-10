const SET_STORY_IDS = 'SET_STORY_IDS'

export const storyIDsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STORY_IDS:
      return action.payload
    default:
      return state
  }
}

export const setStoryIDs = payload => ({ type: SET_STORY_IDS, payload })
