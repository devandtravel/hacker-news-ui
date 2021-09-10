import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { storyIDsReducer } from './reducers/itemIDs/storyIDsReducer'
import { commentsReducer } from './reducers/items/commentsReducer'
import { repliesReducer } from './reducers/items/repliesReducer'
import { storiesReducer } from './reducers/items/storiesReducer'

const rootReducer = combineReducers({
  stories: storiesReducer,
  comments: commentsReducer,
  replies: repliesReducer,
  storyIDs: storyIDsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
