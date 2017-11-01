import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding: '0px'
  }
};

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  update(input) {
    return event => this.setState({
      [input]: event.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
        //first render is for logged in status, second is for not logged in
    const myerrors = this.props.errors.errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
    });
    if (this.props.currentUser) {
      return (
        <div className="index-main">
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
                  className="landing-header-li">your site</Link>
              </div>
              <div className="botrow-right">
                <ul id="right-nav-list2">
                <li>
                  <Link to="/logout"
                    className="landing-header-li"
                    onClick={this.handleLogout}>log out</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>

          <div className="index-page-title-div">
            <h2 className="index-page-title">Discover
            </h2></div>

          <ul className="album-items">
            {
              this.props.albums.map(album => (
                <AlbumIndexItem key={album.id} album={album} />
              ))
            }
          </ul>
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
      <div className="index-main">
        <div className="index-header">
          <div className="landing-header-toprow">
            <div className="toprow-left">
              <div id="session-company_logo">
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
                <p className="landing-header-tagline">
                  Listen to amazing music from the newest up-and-coming artists and support them directly!
                </p>
            </div>
            <div className="botrow-right">
              <ul className="right-nav-list">
              <li>
                <Link to="/login"
                  className="landing-header-li">log in</Link>
              </li>
              <li>
                <button
                  className="landing-header-li modal-button"
                  onClick={this.openModal}>sign up</button>

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  shouldCloseOnOverlayClick={true}
                  style={customStyles}>
                  <form onSubmit={this.handleSubmit} className="modal-form-box">
                    <div className="modal-title-div">
                      <h2 className="modal-title-div">Sign up for a Bandom Account</h2>
                    </div>
                    <div className="modal-div">
                      <span className="band-icon"></span>
                      <Link to="/signup" className="signup-modal-button">Sign up as an artist</Link>
                    </div>
                  </form>
                </Modal>

              </li>
            </ul>
            </div>
          </div>
        </div>
        
        <div className="lo-index-page-title-div">
          <h2 className="lo-index-page-title">Discover
          </h2></div>
        <ul className="lo-album-items">
          {
            this.props.albums.map(album => (
              <AlbumIndexItem key={album.id} album={album} />
            ))
          }
        </ul>
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

export default AlbumIndex;
