import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'
import { StoryPreview } from '../../views/Feed/StoryPreview/StoryPreview'
import { stories } from '../../models/fetchedDevArrays/stories' // TODO: for dev, no fetching, remove
// import { stories } from '../../models/fetchStory'
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material'
import { v4 } from 'uuid'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary
}))

export const News = () => {
  return (
    <Layout layoutStyle='blog'>
      <Header isRefreshNewsButton={true} />
      <Stack direction='column' sx={{ mt: 2 }} spacing={1} alignItems='stretch'>
        {stories.slice(0, 100).map(
          story =>
            story !== null && (
              <Item key={v4()}>
                <StoryPreview
                  story={story}
                  id={story.id}
                  title={story.title}
                  date={
                    '!!! WTF ' + new Date(story.time).toString() + ' WTF !!!'
                  } // TODO: remove
                  author={story.by}
                  score={story.score}
                />
              </Item>
            )
        )}
      </Stack>
    </Layout>
  )
}
