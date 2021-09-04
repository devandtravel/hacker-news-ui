import { Redirect, Route, Switch } from 'react-router-dom'

import { News } from './News/News'
import { Story } from './Story/Story'

export const Routes = () => (
  <Switch>
    <Route path='/news' component={News} />
    <Route path='/story/:id' component={Story} />
    <Redirect from={'/'} to={'news'} exact />
    <Route render={() => <h1>404</h1>} />
  </Switch>
)
