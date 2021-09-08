// TODO: some comments contain <p> tags, fixed with dangerouslySetInnerHTML, fix this
import { useState, useEffect, useCallback } from 'react'
import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'
import { List } from '@mui/material'
import { Link } from '@mui/material'
import { ListItem } from '@mui/material'
import { Divider, Avatar, Grid, Paper } from '@mui/material'
import { v4 } from 'uuid'
import { fetchItem } from '../../models/fetchData'
import { useHistory } from 'react-router-dom'

export const Story = props => {
  const story = props.history.location.story
  const [comments, setComments] = useState([])
  let history = useHistory()

  const [subCommentIDs, setSubCommentIDs] = useState({}) // {commentID: [subCommentID1, subCommentID2...]}
  const [subComments, setSubComments] = useState({})
  const [clickedCommentIDs, setClickedCommentIDs] = useState([])

  useEffect(() => {
    async function fetchComments() {
      try {
        let comment = {}
        let newComments = []
        if (story && story.kids) {
          // TODO: DELETE!
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
    fetchComments()
  }, [story])

  const handleSubcomments = (ID, subIDs) => {
    if (!clickedCommentIDs.includes(ID)) {
      setClickedCommentIDs(clickedCommentIDs => [...clickedCommentIDs, ID])
      setSubCommentIDs(subCommentIDs => {
        let newSubcomments = subCommentIDs
        newSubcomments[ID.toString()] = subIDs
        return newSubcomments
      }) // {commentID: [subCommentID1, subCommentID2...]}
      console.log('include')
      console.log(subCommentIDs)
    }
    console.log('not include')
  }

  useEffect(() => {
    console.log('in useEffect()', clickedCommentIDs)
    async function fetchSubComments(commentID, subCommentIDs) {
      console.log('in fetchSubComments()', commentID, subCommentIDs)

      try {
        let subComment = {}
        let newSubComments = []

        // for (let index = 0; index < subCommentIDs.length; index++) {
        //   subComment = await fetchItem(subCommentIDs[index])
        //   newSubComments.push(subComment)
        // }
        // setSubComments(subComments => {
        //   subComments[clickedCommentIDs[clickedCommentIDs.length - 1].toString()] = newSubComments
        //   return subComments
        // })
        for (let index = 0; index < subCommentIDs.length; index++) {
          await fetchItem(subCommentIDs[index]).then(subComment => {
            console.log('subComment in fetchItem', subComment)

            newSubComments.push(subComment)
            setSubComments(subComments => {
              subComments[clickedCommentIDs[clickedCommentIDs.length - 1].toString()] = newSubComments
              return subComments
            })
          })
        }

        console.log('subComments after click:', subComments)
      } catch (error) {
        console.error(error)
      }
    }
    if (clickedCommentIDs.length > 0) {
      fetchSubComments(
        clickedCommentIDs[clickedCommentIDs.length - 1],
        subCommentIDs[clickedCommentIDs[clickedCommentIDs.length - 1].toString()]
      )
    }
  }, [subCommentIDs, clickedCommentIDs])

  const redirectToNews = () => {
    setClickedCommentIDs([])
    history.push('/news')
    return (
      <h2 style={{ color: 'red' }}>
        Story with that ID is undefined, please return to news page and choose another story
      </h2>
    )
  }

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
                <div>{`${story.kids ? story.kids.length : 0}`}</div>
              </ListItem>
            </List>
          </Paper>
          {comments[0] && <h2>Comments</h2>}
          {comments[0] ? (
            <Paper style={{ padding: '40px 20px' }}>
              {comments[0] &&
                comments.map((kid, index) => (
                  <>
                    <Grid container wrap='nowrap' spacing={2} key={v4()}>
                      <Grid item key={v4()}>
                        <Avatar alt='Avatar Placeholder' key={v4()} />
                      </Grid>
                      <Grid justifyContent='left' item xs zeroMinWidth key={v4()}>
                        <h4 key={v4()} style={{ margin: 0, textAlign: 'left' }}>
                          {kid.by}
                        </h4>
                        <div
                          key={v4()}
                          style={{ textAlign: 'left' }}
                          dangerouslySetInnerHTML={{ __html: kid.text }} // TODO: replace with more safe alternative
                        />
                        <p key={v4()} style={{ textAlign: 'left', color: 'gray' }}>
                          posted {new Date(kid.time).toString()}
                        </p>

                        {kid.kids ? (
                          <>
                            <Divider key={v4()} textAlign='left' onClick={() => handleSubcomments(kid.id, kid.kids)}>
                              Replies is here | Click to load
                            </Divider>
                            {Object.keys(subComments).length}
                            {/* {Object.keys(subComments).length !== 0 &&
                              subComments[kid.id.toString()].map(subComment => (
                                <Grid justifyContent='left' item xs zeroMinWidth key={v4()}>
                                  <Grid item key={v4()}>
                                    <Avatar alt='Avatar Placeholder' key={v4()} />
                                  </Grid>
                                  <h4 key={v4()} style={{ margin: 0, textAlign: 'left' }}>
                                    {subComment.by}
                                  </h4>
                                  <div
                                    key={v4()}
                                    style={{ textAlign: 'left' }}
                                    dangerouslySetInnerHTML={{ __html: subComment.text }} // TODO: replace with more safe alternative
                                  />
                                  <p key={v4()} style={{ textAlign: 'left', color: 'gray' }}>
                                    posted {new Date(subComment.time).toString()}
                                  </p>
                                </Grid>
                              ))} */}
                          </>
                        ) : (
                          <small style={{ color: 'grey' }}>There is no replies</small>
                        )}
                      </Grid>
                    </Grid>
                    {index >= comments.length - 1 ? null : (
                      <Divider key={v4()} variant='fullWidth' style={{ margin: '30px 0' }} />
                    )}
                  </>
                ))}
            </Paper>
          ) : null}
        </>
      ) : (
        redirectToNews()
      )}
    </Layout>
  )
}
