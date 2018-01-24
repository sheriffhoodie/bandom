import { connect } from 'react-redux';
import AlbumShow from './album_show';
import {fetchAlbum, fetchAlbums, deleteAlbum} from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums[parseInt(ownProps.match.params.albumId)],
    errors: {errors: state.errors.session},
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchAlbums: () => dispatch(fetchAlbums()),
    deleteAlbum: id => dispatch(deleteAlbum(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
