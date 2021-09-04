import './index.scss'

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './components/pages/Routes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
