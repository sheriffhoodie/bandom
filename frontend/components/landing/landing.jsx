import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    debugger
    event.preventDefault();
    this.props.logout();
  }

  LandingStatus(currentUser, logout){
    return (
    <header className="landing-header">
    <h2 className="header-name">Hi, {currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </header>
);
  }
  LandingRender({ currentUser, logout }){
    return (
      currentUser ? LandingStatus(currentUser, logout) : <Link to="/login">Log In</Link>
  );
}
render() {
  if (this.props.currentUser) {
    return (
      <div>
        <h1>Break time, everybody</h1>
        <button className="header-button" onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  } else {
  return (
    <Redirect to="/login" />
  );
  }
}

}



export default Landing;
