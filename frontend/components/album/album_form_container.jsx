import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import AlbumForm from './album_form';
import { fetchAlbum, createAlbum, updateAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.path === "/albums/:albumId/edit") {
    return {
      album: state.albums[ownProps.match.params.albumId],
      currentUser: state.session.currentUser
    };
  } else {
    return {
      album: {title: "", description: "", artistName: "", genre: "", year: "", tracks: []},
      currentUser: state.session.currentUser
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path === "/form") {
    return {
      createAlbum: album => { return dispatch(createAlbum(album));}
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
