import { connect } from 'react-redux';
import AlbumShow from './album_show';
import {fetchAlbum, fetchAlbums, deleteAlbum} from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  if (state.session.currentUser) {
    return {
      album: state.entities.albums[parseInt(ownProps.match.params.albumId)],
      errors: {errors: state.errors.session},
      currentUserId: state.session.currentUser.id,
    };
  } else {
    return {
      album: state.entities.albums[parseInt(ownProps.match.params.albumId)],
      errors: {errors: state.errors.session},
    };
  }
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
