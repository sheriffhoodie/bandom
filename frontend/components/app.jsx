import React from 'react';
import SessionFormContainer from './session/session_form_container';
import LandingContainer from './landing/landing_container';
import { Route, Link, HashRouter, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionModal from './session_modal';

const App = () => (
  <div>
    <div>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={LandingContainer} />
    </div>
  </div>
);

export default App;
