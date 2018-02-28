import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  payload: currentUser
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    payload: errors
  };
};

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => {
      return dispatch(receiveCurrentUser(user));
    }, err => {
      return dispatch(receiveErrors(err.responseJSON));
    })
);

export const login = user => dispatch => {
  return (
    APIUtil.login(user).then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
};

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
