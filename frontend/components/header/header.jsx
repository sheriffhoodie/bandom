import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    if (!this.props.currentUser) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="album-main">
          <div className="index-header">
            <div className="landing-header-toprow">
              <div className="toprow-left">
                <div id="index-company_logo">
                </div>
                <h3 className="index-title"><Link
                  to="/">Bandom</Link></h3>
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
                  className="landing-header-li">your site
                </Link>
              </div>
              <div className="botrow-right">
                <ul id="right-nav-list2">
                  <li>
                    <Link to="/albums"
                      className="landing-header-li">discover</Link>
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
        </div>
      );
    }
  }
}

export default Header;
