import { login, logout } from '../../actions/session_actions';
import Header from './header';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: {errors: state.errors.session}
  };
};

const mapDispatchToProps = dispatch => ({
  // login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
