import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    album: state.entities.albums[parseInt(ownProps.match.params.albumId)]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
