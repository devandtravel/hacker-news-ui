import { createContext, useMemo, useState } from 'react'

import { Route, Switch } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { News } from './News'
import { Story } from './Story'

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
          <Route path='/' exact component={News} />
          <Route path='/story/:id' component={Story} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Switch>
  )
}
