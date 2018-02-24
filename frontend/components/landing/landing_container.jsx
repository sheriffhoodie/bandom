import { connect } from 'react-redux';
import Landing from './landing';
import { login, logout } from '../../actions/session_actions';
import { fetchFeaturedArtists } from '../../actions/artist_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: {errors: state.errors.session},
  featuredArtists: state.entities.featuredArtists
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchFeaturedArtists: () => dispatch(fetchFeaturedArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
