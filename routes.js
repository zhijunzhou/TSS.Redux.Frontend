import React from 'react'
import { Route } from 'react-router'
import Home from './containers/Home'
import AllOppty from './containers/AllOppty'
import MyOppty from './containers/MyOppty'
import CSHome from './containers/CSHome'

export default 
<Route path="/" component={Home}>
  <Route path="/allOppty" component={AllOppty} />
  <Route path="/myOppty" component={MyOppty} />
  <Route path="/cs" component={CSHome}>
    <Route path=":opptyId" component={CSHome} />
    <Route path=":opptyId/:sid" component={CSHome} />
  </Route>
</Route>
