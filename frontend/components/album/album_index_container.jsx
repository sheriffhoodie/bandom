import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums, fetchAlbum, deleteAlbum } from '../../actions/album_actions';

const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  deleteAlbum: id => dispatch(deleteAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
