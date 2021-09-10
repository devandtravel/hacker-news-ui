import * as types from '../../types'
import { setComment } from '../items/commentsReducer'

export const fetchComment = id => {
  const url = `${types.BASE_URL}/item/${id}${types.JSON_QUERY}`
  return dispatch => {
    try {
      fetch(url, { method: 'GET', headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => response.json())
        .then(json => {
          return dispatch(setComment(json))
        })
    } catch (error) {
      console.warn('Warning:', error.message)
    }
  }
}
