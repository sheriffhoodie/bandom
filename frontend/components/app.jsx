import React from 'react';
import SessionFormContainer from './session/session_form_container';
import LandingContainer from './landing/landing_container';
import AlbumIndexContainer from './album/album_index_container';
import AlbumShowContainer from './album/album_show_container';
import { Route, Link, HashRouter, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionModal from './session_modal';

const App = () => (
  <div>
    <div>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={LandingContainer} />
      <Route exact path="/albums" component={AlbumIndexContainer} />
      <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
    </div>
  </div>
);

export default App;
