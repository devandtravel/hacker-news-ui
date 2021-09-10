import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { Divider, Paper } from '@mui/material'

import { Comment } from '../components/Comment'
import { Header } from '../components/Header'
import { StoryDetails } from '../components/StoryDetails'
import { fetchComment } from '../redux/reducers/asyncActions/fetchComment'
import { deleteComments } from '../redux/reducers/items/commentsReducer'

export const Story = props => {
  const story = props.history.location.story
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(deleteComments())
    story && story.kids && story.kids.map(commentID => dispatch(fetchComment(commentID)))
  }, [story])

  return (
    <>
      <Header isRefreshNewsButton={false} story={story} />
      {story ? (
        <>
          <StoryDetails story={story} />
          {comments[0] && <h2>Comments</h2>}
          {comments[0] ? (
            <Paper style={{ padding: '40px 20px' }}>
              {comments[0] &&
                comments.map((comment, index) => (
                  <>
                    <Comment comment={comment} key={v4()} />
                    {index >= comments.length - 1 ? null : (
                      <Divider variant='fullWidth' style={{ margin: '30px 0' }} key={v4()} />
                    )}
                  </>
                ))}
            </Paper>
          ) : null}
        </>
      ) : (
        <h2 style={{ color: 'red' }}>
          Story with that ID is undefined, please return to news page and choose another story
        </h2>
      )}
    </>
  )
}
