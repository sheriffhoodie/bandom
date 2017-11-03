import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import AlbumForm from './album_form';
import { fetchAlbum, createAlbum, updateAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.path === "/albums/:albumId/edit") {
    return {
      album: state.albums[ownProps.match.params.albumId]
    };
  } else {
    return {
      album: {title: "", description: "", artistName: "", tracks: []}
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path === "/albums/form") {
    return {
      action: album => dispatch(createAlbum(album))
    };
  } else {
    return {
      fetchAlbum: id => dispatch(fetchAlbum(id)),
      action: album => dispatch(updateAlbum(album))
    };
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm));
