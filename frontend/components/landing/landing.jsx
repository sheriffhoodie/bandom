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
          <div className="landing-header">
            <div className="landing-header-toprow">
              <div className="toprow-left">
                <div id="session-company_logo">
                </div>
                <h3 className="landing-login-title"><Link to="/login">Bandom</Link></h3>
              </div>
                <div className="toprow-right">
                  <label>
                    <input type="text" className="search-bar" placeholder="Search for artist, track or album"/>
                  </label>
                </div>
              </div>
            <div className="landing-header-botrow">
              <div className="botrow-left">
                  <p className="landing-header-username">Hi, {this.props.currentUser.username}</p>
                <Link to="/login" className="landing-header-li">your site</Link>
              </div>
              <div className="botrow-right">
                <ul className="right-nav-list">
                <li>
                  <a href="#" className="landing-header-li">discover</a>
                </li>
                <li>
                  <Link to="/logout" className="landing-header-li" onClick={this.handleLogout}>log out</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="landing-main-feature">
          </div>
          <ul className="landing-sub-features"></ul>
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
