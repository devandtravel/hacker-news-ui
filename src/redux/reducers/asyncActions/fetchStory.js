import * as types from '../../types'
import { setStory } from '../items/storiesReducer'

export const fetchStory = id => {
  const url = `${types.BASE_URL}/item/${id}${types.JSON_QUERY}`
  return dispatch => {
    try {
      fetch(url, { method: 'GET', headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => response.json())
        .then(json => {
          return dispatch(setStory(json))
        })
    } catch (error) {
      console.warn('Warning:', error.message)
    }
  }
}
