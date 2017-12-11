import {connect} from 'react-redux';
import Search from './search';
import {withRouter} from 'react-router-dom';
import {fetchAlbums, fetchAlbum} from '../../actions/album_actions';

const mapStateToProps = (state) => {
  return({
    albums: Object.values(state.entities.albums)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
