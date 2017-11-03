import Artist from './artist';
import { connect } from 'react-redux';
import { fetchArtist, fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.match.params.id);
  return {
    artistId,
    artist: state.entities.artists[artistId] || {},
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtist: id => dispatch(fetchArtist(id)),
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
