import { IDs } from './fetchStoryIDs'
// import { IDs } from './IDs' // TODO: for dev, no fetching, remove
import { request } from './request'
import * as types from './types'

const fetchStory = async id =>
  await request(
    `${types.BASE_URL}/item/${id}${types.JSON_QUERY}`,
    'GET',
    null
  )

export const stories = []
let story = null

for (let index = 0; index < 5; index++) {
  story = await fetchStory(IDs[index])
  stories.push(story)
}