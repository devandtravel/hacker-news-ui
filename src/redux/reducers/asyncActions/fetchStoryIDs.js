import * as types from '../../types'
import { setStoryIDs } from '../itemIDs/storyIDsReducer'

const url = `${types.BASE_URL}/${types.END_POINT}${types.JSON_QUERY}`

export const fetchStoryIDs = () => {
  return dispatch => {
    try {
      fetch(url, { method: 'GET', headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => response.json())
        .then(json => {
          return dispatch(setStoryIDs(json.slice(0, types.NUMBER_OF_STORY_IDS)))
        })
    } catch (error) {
      console.warn('Warning:', error.message)
    }
  }
}
