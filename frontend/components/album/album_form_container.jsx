import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import AlbumForm from './album_form';
import { fetchAlbum, createAlbum, updateAlbum } from '../../actions/album_actions';
import { fetchArtist, updateArtist } from '../../actions/artist_actions';


const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.path === "/albums/:albumId/edit") {
    return {
      album: state.albums[ownProps.match.params.albumId],
      currentUser: state.session.currentUser,
    };
  } else {
    const artistId = state.session.currentUser.id;
    return {
      artistId,
      artist: state.entities.artists[artistId] || {},
      album: {title: "", description: "", artistName: "", genre: "", year: "", tracks: []},
      currentUser: state.session.currentUser,
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path === "/form") {
    return {
      createAlbum: album => dispatch(createAlbum(album)),
      fetchArtist: id => dispatch(fetchArtist(id)),
      updateArtist: data => dispatch(updateArtist(data))};
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
