import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Link, HashRouter, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <div>
      <header>
        <h2>Welcome to Bandom</h2>
        <GreetingContainer />
      </header>
    </div>
    <div>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  </div>
);

export default App;
