import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums[parseInt(ownProps.match.params.albumId)]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchAlbums: () => dispatch(fetchAlbums())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
