import { Redirect, Route, Switch } from 'react-router-dom'
import { createContext, useState, useMemo } from 'react'
import { News } from './News/News'
import { Story } from './Story/Story'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
export const Routes = () => {
  const [mode, setMode] = useState('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <Switch>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Route path='/news' component={News} />
          <Route path='/story/:id' component={Story} />
          <Redirect from={'/'} to={'news'} exact />
          {/* <Route render={() => <h1>404</h1>} /> */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Switch>
  )
}
