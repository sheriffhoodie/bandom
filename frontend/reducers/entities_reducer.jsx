import { combineReducers } from 'redux';
import albums from './albums_reducer';
import tracks from './tracks_reducer';
import users from './users_reducer';
import artists from './artists_reducer';

const EntitiesReducer = combineReducers({
  albums,
  tracks,
  users,
  artists
});

export default EntitiesReducer;
