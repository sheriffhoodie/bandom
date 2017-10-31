import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums, fetchAlbum, deleteAlbum } from '../../actions/album_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums),
    currentUser: state.session.currentUser,
    errors: {errors: state.errors.session}
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
