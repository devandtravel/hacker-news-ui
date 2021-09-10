import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { Paper, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

import { Header } from '../components/Header'
import { StoryPreview } from '../components/StoryPreview'
import { fetchStory } from '../redux/reducers/asyncActions/fetchStory'
import { fetchStoryIDs } from '../redux/reducers/asyncActions/fetchStoryIDs'
import { deleteStories } from '../redux/reducers/items/storiesReducer'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary
}))

export const News = () => {
  const dispatch = useDispatch()
  const storyIDs = useSelector(state => state.storyIDs)
  const stories = useSelector(state => state.stories)

  useEffect(() => {
    dispatch(fetchStoryIDs())
  }, [])

  useEffect(() => {
    dispatch(deleteStories())
    storyIDs && storyIDs.map(storyID => dispatch(fetchStory(storyID)))
  }, [storyIDs])

  return (
    <>
      <Header isRefreshNewsButton={true} />
      <Stack direction='column' spacing={1} alignItems='stretch'>
        {stories.map(
          story =>
            story !== null && (
              <Item key={v4()}>
                <StoryPreview story={story} />
              </Item>
            )
        )}
      </Stack>
    </>
  )
}
