import { request } from './request'
import * as types from './types'

export const fetchStoryIDs = async (quantity) => {
  storyIDs = await request(`${types.BASE_URL}/${types.END_POINT}${types.JSON_QUERY}`)
  return storyIDs.slice(0, quantity)
}
export const fetchItem = async id => await request(`${types.BASE_URL}/item/${id}${types.JSON_QUERY}`)

export const stories = []
let story = null
let storyIDs = []
storyIDs = await fetchStoryIDs(5)
for (let index = 0; index < storyIDs.length; index++) {
  story = await fetchItem(storyIDs[index])
  stories.push(story)
}
