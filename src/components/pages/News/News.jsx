import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'
import { StoryPreview } from '../../views/Feed/StoryPreview/StoryPreview'
import posts from '../../models/fetchPosts'
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
      <Header isRefreshButton={true} />
      <Stack direction='column' sx={{ mt: 2 }} spacing={1} alignItems='stretch'>
        {posts.slice(0, 100).map(
          post =>
            post !== null && (
              <Item key={v4()}>
                <StoryPreview
                  id={post.id}
                  title={post.title}
                  date={
                    '!!! WTF ' + new Date(post.time).toString() + ' WTF !!!'
                  } // TODO: remove
                  author={post.by}
                  score={post.score}
                />
              </Item>
            )
        )}
      </Stack>
    </Layout>
  )
}
