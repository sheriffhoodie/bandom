import { connect } from 'react-redux';
import Landing from './landing';
import { login, logout } from '../../actions/session_actions';
import { fetchFeaturedArtists } from '../../actions/artist_actions';

const mapStateToProps = (state) => {
  let genres = [];
  let albums = Object.values(state.entities.albums);
  albums.forEach(album => {
    if (!genres.includes(album.genre)) {
      genres.push(album.genre);
    }
  });
  return {
    currentUser: state.session.currentUser,
    errors: {errors: state.errors.session},
    featuredArtists: state.entities.featuredArtists,
    genres: genres,
    albums: albums
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchFeaturedArtists: () => dispatch(fetchFeaturedArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
