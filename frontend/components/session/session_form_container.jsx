import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: {errors: state.errors.session}
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));


// const mapDispatchToProps = (dispatch, { location }) => {
//   return {
//     switchModal: () => dispatch(openModal("login")),
//     closeModal: () => dispatch(closeModal()),
//     processForm: user => dispatch(signup(user)),
//     formType: "signup"
//   };
// };
