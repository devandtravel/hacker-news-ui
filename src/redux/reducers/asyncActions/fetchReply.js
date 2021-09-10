import * as types from '../../types'
import { setReply } from '../items/repliesReducer'

export const fetchReply = id => {
  const url = `${types.BASE_URL}/item/${id}${types.JSON_QUERY}`
  return dispatch => {
    try {
      fetch(url, { method: 'GET', headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => response.json())
        .then(json => {
          return dispatch(setReply(json))
        })
    } catch (error) {
      console.warn('Warning:', error.message)
    }
  }
}
