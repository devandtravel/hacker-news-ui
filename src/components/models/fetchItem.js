import { request } from './request'
import * as types from './types'

export const fetchItem = async id =>
  await request(
    `${types.BASE_URL}/item/${id}${types.JSON_QUERY}`,
    'GET',
    null
  )