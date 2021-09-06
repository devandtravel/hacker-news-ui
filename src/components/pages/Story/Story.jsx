// TODO: some comments contain <p> tags, f.e. id 28433818 check this
import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { Divider, Avatar, Grid, Paper } from '@mui/material'
import { v4 } from 'uuid'

import { kids } from '../../models/commentsIDs'
import { fetchItem } from '../../models/fetchItem'

let testComment0,
  testComment1,
  testComment2 = {}
testComment0 = await fetchItem(kids[0])
testComment1 = await fetchItem(kids[1])
testComment2 = await fetchItem(kids[2])
export const Story = props => {
  const story = props.history.location.story

  const comments = [testComment0, testComment1, testComment2]
  // let comment = null
  // if (story && story.kids) {
  //   for (let index = 0; index < story.kids.length; index++) {
  //     comment = await fetchItem(story.kids[index])
  //     comments.push(comment)
  //   }
  // }

  console.log(comments)

  return (
    <Layout layoutStyle='blog'>
      <Header isRefreshNewsButton={false} />

      {story ? (
        <>
          <List>
            <h2>Story Details</h2>
            <ListItem>{`URL: ${story.url && story.url}`}</ListItem>
            <ListItem>{`Title: ${story.title && story.title}`}</ListItem>
            <ListItem>{`Time: ${story.time && story.time}`}</ListItem>
            <ListItem>{`Author: ${story.by && story.by}`}</ListItem>
            <ListItem>{`How many comments: ${story.kids ? story.kids.length : 'No comments'}`}</ListItem>
          </List>
          {comments ? (
            <>
              <h2>Comments</h2>
              <Paper style={{ padding: '40px 20px' }}>
                {comments &&
                  comments.map((kid, index) => (
                    <>
                      <Grid container wrap='nowrap' spacing={2} key={v4()}>
                        <Grid item key={v4()}>
                          <Avatar alt='Avatar Placeholder' src={'https://i.pravatar.cc/200'} key={v4()} />
                        </Grid>
                        <Grid justifyContent='left' item xs zeroMinWidth key={v4()}>
                          <h4 key={v4()} style={{ margin: 0, textAlign: 'left' }}>
                            {kid.by}
                          </h4>
                          <p key={v4()} style={{ textAlign: 'left' }}>
                            {kid.text}
                          </p>
                          <p key={v4()} style={{ textAlign: 'left', color: 'gray' }}>
                            posted {new Date(kid.time).toString()}
                          </p>
                        </Grid>
                      </Grid>
                      {index >= comments.length - 1 ? null : (
                        <Divider key={v4()} variant='fullWidth' style={{ margin: '30px 0' }} />
                      )}
                    </>
                  ))}
              </Paper>
            </>
          ) : null}
          {/* {comments && comments.map((kid, index) => <ListItem key={v4()}>{`${index + 1}. ${kid.text}`}</ListItem>)} */}
        </>
      ) : (
        <h2 style={{ color: 'red' }}>Story is undefined</h2>
      )}
    </Layout>
  )
}
