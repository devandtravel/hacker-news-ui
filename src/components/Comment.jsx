import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { Avatar, Divider, Grid } from '@mui/material'

import { fetchReply } from '../redux/reducers/asyncActions/fetchReply'
import { Reply } from './Reply'

export const Comment = ({ comment }) => {
  const dispatch = useDispatch()
  const replies = useSelector(state => state.replies)
  const handleReplies = comment => {
    comment && comment.kids && comment.kids.map(replyID => dispatch(fetchReply(replyID)))
  }
  return (
    <Grid container wrap='nowrap' spacing={2}>
      <Grid item>
        <Avatar alt='Avatar Placeholder' />
      </Grid>
      <Grid justifyContent='left' item xs zeroMinWidth>
        <h4 style={{ margin: 0, textAlign: 'left' }}>{comment.by}</h4>
        <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: comment.text }} />
        <p style={{ textAlign: 'left', color: 'gray' }}>posted {new Date(comment.time).toString()}</p>
        {comment.kids ? (
          <>
            <Divider textAlign='left' onClick={() => handleReplies(comment)}>
              Replies is here | Click to load
            </Divider>
            {replies[0] && replies.map(reply => reply.parent === comment.id && <Reply reply={reply} key={v4()} />)}
          </>
        ) : (
          <small style={{ color: 'grey' }}>There is no replies</small>
        )}
      </Grid>
    </Grid>
  )
}
