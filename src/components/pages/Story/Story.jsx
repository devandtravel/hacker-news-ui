// TODO: some comments contain <p> tags, f.e. id 28433818 check this
import { useState, useEffect } from 'react'
import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'
import { List } from '@mui/material'
import { Link } from '@mui/material'
import { ListItem } from '@mui/material'
import { Divider, Avatar, Grid, Paper } from '@mui/material'
import { v4 } from 'uuid'
import { fetchItem } from '../../models/fetchData'

export const Story = props => {
  const story = props.history.location.story

  const [comments, setComments] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        let comment = {}
        let newComments = []
        if (story && story.kids) {
          for (let index = 0; index < story.kids.length; index++) {
            comment = await fetchItem(story.kids[index])
            newComments.push(comment)
          }
        }
        setComments(newComments)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [story])

  console.log(comments)
  const __html = ''

  return (
    <Layout layoutStyle='blog'>
      <Header isRefreshNewsButton={false} />
      {story ? (
        <>
          <h2>Story Details</h2>
          <Paper style={{ padding: '40px 20px' }}>
            <List>
              <ListItem sx={{ display: 'flex' }}>
                <Link href={`${story.url && story.url}`}>Link to source</Link>
              </ListItem>
              <ListItem sx={{ display: 'flex' }}>
                <div style={{ width: '30%' }}>Title</div>
                <div>{`${story.title && story.title}`}</div>
              </ListItem>
              <ListItem sx={{ display: 'flex' }}>
                <div style={{ width: '30%' }}>Time</div>
                <div>{`${story.time && story.time}`}</div>
              </ListItem>
              <ListItem sx={{ display: 'flex' }}>
                <div style={{ width: '30%' }}>Author</div>
                <div>{`${story.by && story.by}`}</div>
              </ListItem>
              <ListItem sx={{ display: 'flex' }}>
                <div style={{ width: '30%' }}>Number of comments</div>
                <div>{`${story.kids ? story.kids.length : 'No comments'}`}</div>
              </ListItem>
            </List>
          </Paper>

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
                          {/* <p key={v4()} style={{ textAlign: 'left' }}> */}
                          <div
                            key={v4()}
                            style={{ textAlign: 'left' }}
                            dangerouslySetInnerHTML={{ __html: kid.text }} // TODO: replace with more safe alternative
                          />
                          {/* {kid.text} */}
                          {/* </p> */}
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
