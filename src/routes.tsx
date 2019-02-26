import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router';

import App from './App';
import Playground from 'containers/Playground';
import PlaygroundRedux from 'containers/PlaygroundRedux';
import NotFoundPage from './containers/common/NotFoundPage';



export default (props) => {
  return (
    <App>
      <Switch>
        <Route path="/" exact={true} component={Playground} />
        <Route path="/redux" exact={true} component={PlaygroundRedux} />
        <Route path="/" to="notfound" component={NotFoundPage} />
      </Switch>
    </App>
  )
}