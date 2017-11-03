import React from 'react';
import SessionFormContainer from './session/session_form_container';
import LandingContainer from './landing/landing_container';
import AlbumIndexContainer from './album/album_index_container';
import AlbumShowContainer from './album/album_show_container';
import { Route, Link, HashRouter, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionModal from './session_modal';
import HeaderContainer from './header/header_container';
import HeaderLoggedOutContainer from './header/header_lo_container';
import AlbumFormContainer from './album/album_form_container';
import ArtistContainer from './artist/artist_container';

const App = () => {
  let header;
  if (!window.currentUser) {
    header = HeaderLoggedOutContainer;
  } else {
    header = HeaderContainer;
  }

  return (

  <div>
    <div>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={header} />
      <Route exact path="/" component={LandingContainer} />
      <Route exact path="/albums" component={header} />
      <Route exact path="/albums" component={AlbumIndexContainer} />
      <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
      <Route exact path="/albums/:albumId" component={header} />
      <Route exact path="/form" component={header} />
      <Route exact path="/form" component={AlbumFormContainer}/>
      <Route exact path="/artists/:id" component={header} />
      <Route exact path="/artists/:id" component={ArtistContainer} />
    </div>
  </div>
  );
};

export default App;
