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

  handleLogin(event, user) {
    event.preventDefault();
    this.props.login(user);
  }

  render() {
    //first render is for logged in status, second is for not logged in
    if (this.props.currentUser) {
      return (
        <div className="landing-main">
          <div className="landing-header">
            <div className="landing-header-toprow">
              <div className="toprow-left">
                <div id="session-company_logo">
                </div>
                <h3 className="landing-login-title"><Link
                  to="/login">Bandom</Link></h3>
              </div>
                <div className="toprow-right">
                  <label>
                    <input type="text"
                      className="search-bar"
                      placeholder="Search for artist, track or album"/>
                  </label>
                </div>
              </div>
            <div className="landing-header-botrow">
              <div className="botrow-left">
                  <p className="landing-header-username">
                    Hi, {this.props.currentUser.username}</p>
                <Link to="/login"
                  className="landing-header-li">your site</Link>
              </div>
              <div className="botrow-right">
                <ul className="right-nav-list">
                <li>
                  <a href="#"
                    className="landing-header-li">discover</a>
                </li>
                <li>
                  <Link to="/logout"
                    className="landing-header-li"
                    onClick={this.handleLogout}>log out</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="landing-features">
            <div className="landing-main-feature">
            </div>
            <ul className="landing-sub-features">
              <li className="sub-feat1"></li>
              <li className="sub-feat2"></li>
              <li className="sub-feat3"></li>
            </ul>
          </div>
          <footer className="footer">
            <p className="footer-text">
              Follow me on <a href="http://github.com/sheriffhoodie">GitHub</a> and <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">Linkedin!</a>
            </p>
          </footer>
        </div>
      );
    } else {
      // for not logged in users who are browsing landing page
      // this one contains a sign up modal, which redirects to session form
    return (
      <div className="landing-main">
        <div className="landing-header">
          <div className="landing-header-toprow">
            <div className="toprow-left">
              <div id="session-company_logo">
              </div>
              <h3 className="landing-login-title"><Link
                to="/login">Bandom</Link></h3>
            </div>
              <div className="toprow-right">
                <label>
                  <input type="text"
                    className="search-bar"
                    placeholder="Search for artist, track or album"/>
                </label>
              </div>
            </div>
          <div className="landing-header-botrow">
            <div className="botrow-left">
                <p className="landing-header-tagline">
                  Listen to amazing music from the newest up-and-coming artists and support them directly!
                </p>
            </div>
            <div className="botrow-right">
              <ul className="right-nav-list">
              <li>
                <a href="#"
                  className="landing-header-li">discover</a>
              </li>
              <li>
                <Link to="/login"
                  className="landing-header-li second-child">log in</Link>
              </li>
              <li>
                <Link to="/login"
                  className="landing-header-li"
                  onClick={this.handleLogout}>sign up</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="landing-features">
          <div className="landing-main-feature">
          </div>
          <ul className="landing-sub-features">
            <li className="sub-feat1"></li>
            <li className="sub-feat2"></li>
            <li className="sub-feat3"></li>
          </ul>
        </div>
        <footer className="footer">
          <p className="footer-text">
            Follow me on <a href="http://github.com/sheriffhoodie">GitHub</a> and <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">Linkedin!</a>
          </p>
        </footer>
      </div>
    );
    }
  }

}



export default Landing;
