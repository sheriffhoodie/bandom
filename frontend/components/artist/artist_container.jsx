import Artist from './artist';
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  let artistId = parseInt(ownProps.match.id);
  return {
    artist: state.artists[artistId],
    artistId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtist: artistId => dispatch(fetchArtist(artistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
