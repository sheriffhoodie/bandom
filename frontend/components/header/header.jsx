import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
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
          <div className="landing-header">
            <div className="landing-header-toprow">
              <div className="toprow-left">
                <div id="index-company_logo">
                </div>
                <h3 className="index-title"><Link
                  to="/">Bandom</Link></h3>
              </div>
              <div className="toprow-right">
                <label>
                  <div className="search-bar">
                    <input type="text"
                      className="search-input"
                      placeholder="Search for artist, track or album"/>
                    <span className="search-icon"></span>
                  </div>
                </label>
              </div>
              </div>
            <div className="landing-header-botrow">
              <div className="botrow-left">
                  <p className="landing-header-username">
                    Hi, {this.props.currentUser.artistName}</p>
                <Link to="/form"
                  className="landing-header-li collection">add music
                </Link>
              </div>
              <div className="botrow-right">
                <ul className="right-nav-list">
                  <li>
                    <Link className="landing-header-li" to="/albums">discover</Link>
                  </li>
                <li>
                  <Link to="/logout"
                    className="landing-header-li logout"
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
