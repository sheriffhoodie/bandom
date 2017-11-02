import { logout } from '../../actions/session_actions';
import HeaderLoggedOut from './header_lo';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: {errors: state.errors.session}
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLoggedOut);
