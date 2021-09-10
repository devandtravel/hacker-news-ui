import { useContext, useState } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { LoadingButton } from '@mui/lab'
import { AppBar, Button, CssBaseline, IconButton, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { ColorModeContext } from '../pages/Routes'
import { fetchStory } from '../redux/reducers/asyncActions/fetchStory'
import { fetchStoryIDs } from '../redux/reducers/asyncActions/fetchStoryIDs'
import { deleteStories } from '../redux/reducers/items/storiesReducer'
import { deleteComments } from '../redux/reducers/items/commentsReducer'
import { fetchComment } from '../redux/reducers/asyncActions/fetchComment'

export const Header = props => {
  const story = props.story
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const [loading, setLoading] = useState(false)
  let history = useHistory()
  const returnToNews = () => {
    history.push('/')
  }
  const HideOnScroll = props => {
    const { children } = props
    const trigger = useScrollTrigger()

    return (
      <Slide appear={false} direction='down' in={!trigger}>
        {children}
      </Slide>
    )
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
  }
  const dispatch = useDispatch()
  const storyIDs = useSelector(state => state.storyIDs)

  const refreshNews = () => {
    setLoading(true)
    dispatch(deleteStories())
    dispatch(fetchStoryIDs())
    storyIDs && storyIDs.map(storyID => dispatch(fetchStory(storyID)))
    setLoading(false)
  }
  const refreshComments = () => {
    setLoading(true)
    dispatch(deleteComments())
    story && story.kids && story.kids.map(commentID => dispatch(fetchComment(commentID)))
    setLoading(false)
  }

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position='static' sx={{ m: 0, p: 0 }}>
          <Toolbar
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}>
            <h1>Hacker News</h1>
            <div>
              {props.isRefreshNewsButton ? (
                <LoadingButton
                  sx={{ m: 1, p: 1, pl: 2, pr: 2 }}
                  loading={loading}
                  loadingIndicator='Loading...'
                  variant='contained'
                  size='medium'
                  onClick={() => refreshNews()}>
                  Refresh News
                </LoadingButton>
              ) : (
                <>
                  <LoadingButton
                    sx={{ m: 1, p: 1, pl: 2, pr: 2 }}
                    loading={loading}
                    loadingIndicator='Loading...'
                    variant='contained'
                    size='medium'
                    onClick={() => refreshComments()}>
                    Refresh Comments
                  </LoadingButton>

                  <Button onClick={returnToNews} sx={{ m: 1, p: 1, pl: 2, pr: 2 }} variant='contained'>
                    Return to news
                  </Button>
                </>
              )}
              <IconButton sx={{ m: 1, p: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
                {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{ m: 1 }} /> : <Brightness4Icon sx={{ m: 1 }} />}
              </IconButton>
              {theme.palette.mode} mode
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
