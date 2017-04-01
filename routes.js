import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './containers/Home'
import Portal from './containers/Portal'
import AllOppty from './containers/AllOppty'

import MyOppty from './containers/MyOppty'
import CSHome from './containers/CSHome'

import CSSectionLoader from './containers/CSSectionLoader'

export default 
<Route path="/" component={Home}>  
  <IndexRoute component={Portal} />
  <Route path="/allOppty" component={AllOppty} />
  <Route path="/myOppty" component={MyOppty} />
  <Route path="/cs" component={CSHome}>
    <Route path=":opptyId" component={CSHome} />
  </Route>
  <Route path="/loader" component={CSSectionLoader}>
    <Route path=":opptyId" component={CSSectionLoader} />
    <Route path=":opptyId/:sid" component={CSSectionLoader} />
  </Route>
</Route>
