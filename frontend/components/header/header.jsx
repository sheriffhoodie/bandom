import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import SearchContainer from '../search/search_container';

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
      return <Redirect to="/login"/>;
    } else {
      return (
        <div className="album-main">
          <div className="landing-header">
            <div className="landing-header-toprow">
              <div className="toprow-left">
                <div className="index-company-logo">
                </div>
                <Link to="/">
                  <h3 className="header-title">Bandom</h3>
                </Link>
              </div>
              <div className="toprow-right">
                <SearchContainer />
              </div>
            </div>
            <div className="landing-header-botrow">
              <div className="botrow-left">
                  <Link to="/user-page" className="header-link">
                    <div className="user-header-link">
                      <img src={this.props.currentUser.image_url}
                        className="user-header-link-pic"/>
                      <p>{this.props.currentUser.artistName}</p>
                    </div>
                  </Link>
                <Link to="/form"
                  className="header-link2">add music
                </Link>
              </div>
              <div className="botrow-right">
                <Link className="header-link" to="/albums">discover</Link>
                <Link to="/login"
                  className="header-link2"
                  onClick={this.handleLogout}>log out</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Header;
