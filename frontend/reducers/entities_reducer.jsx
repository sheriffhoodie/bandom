import { combineReducers } from 'redux';
import albums from './albums_reducer';
import tracks from './tracks_reducer';
import users from './users_reducer';

const EntitiesReducer = combineReducers({
  albums,
  tracks,
  users
});

export default EntitiesReducer;
