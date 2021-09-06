import './index.scss'

import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from './components/pages/Routes'

import { StyledEngineProvider } from '@mui/material/styles'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Routes />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
