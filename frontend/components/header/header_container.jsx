import { logout } from '../../actions/session_actions';
import Header from './header';
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
)(Header);
