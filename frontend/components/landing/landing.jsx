import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="landing-main">
          <header className="main-header">
            <div className="upper-header">
              <div id="company_logo">
              </div>
              <h2 className="login-title"><Link to="/login">Bandom</Link></h2>
            </div>
            <div className="lower-header">
              <ul className="left-ul">
                <li>
                  <h3 className="landing-header-username">Hi, {this.props.currentUser.username}</h3>
                </li>
              </ul>
              <li>
                <Link to="/login" className="landing-header-li">your site</Link>
              </li>
              <ul className="right-ul">
                <li>
                  <a href="#" className="landing-header-li">discover</a>
                </li>
                <li>
                  <Link to="/logout" className="landing-header-li" onClick={this.handleLogout}>log out</Link>
                </li>
              </ul>
            </div>
          </header>
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
