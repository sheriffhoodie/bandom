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
                <div id="index-company_logo">
                </div>
                <h3 className="index-title"><Link
                  to="/">Bandom</Link></h3>
              </div>
              <div className="toprow-right">
                <SearchContainer />
              </div>
            </div>
            <div className="landing-header-botrow">
              <div className="botrow-left">
                  <Link to="#" className="landing-header-li">
                    <div className="user-header-link">
                      <img src={this.props.currentUser.image_url}
                        className="user-header-link-pic"/>
                      <p>{this.props.currentUser.artistName}</p>
                    </div>
                  </Link>
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
                  <Link to="/login"
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
