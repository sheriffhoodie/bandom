import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserPage from './user_page';
import { fetchArtist, updateArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  const artistId = state.session.currentUser.id;
  return {
    artistId,
    artist: state.entities.artists[artistId] || {},
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    updateArtist: data => dispatch(updateArtist(data)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage));
