import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks } from '../../actions/track_actions';

const mapStateToProps = state => {
  return {
    tracks: state.tracks,
    currentUserId: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
