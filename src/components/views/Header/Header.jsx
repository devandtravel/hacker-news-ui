import { useContext, useState } from 'react'
import { ColorModeContext } from '../../../components/pages/Routes'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { Slide } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'

export const Header = props => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const [loading, setLoading] = useState(false)
  let history = useHistory()
  const returnToNews = () => {
    history.push('/news')
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

  // TODO: https://stackoverflow.com/questions/56450975/to-fix-cancel-all-subscriptions-and-asynchronous-tasks-in-a-useeffect-cleanup-f
  const setAndUnsetLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position='sticky' sx={{ m: 0, p: 0 }}>
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
                  onClick={setAndUnsetLoading}>
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
                    onClick={setAndUnsetLoading}>
                    Refresh Comments
                  </LoadingButton>

                  <Button
                    onClick={returnToNews}
                    sx={{ m: 1, p: 1, pl: 2, pr: 2 }}
                    variant='contained'>
                    Return to news
                  </Button>
                </>
              )}
              <IconButton
                sx={{ m: 1, p: 1 }}
                onClick={colorMode.toggleColorMode}
                color='inherit'>
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon sx={{ m: 1 }} />
                ) : (
                  <Brightness4Icon sx={{ m: 1 }} />
                )}
              </IconButton>
              {theme.palette.mode} mode
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
