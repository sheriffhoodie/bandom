import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';
import AlbumShowContainer from './album_show_container';
import TrackIndexItem from '../track/track_index_item';
import AlbumIndexContainer from './album_index_container';
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

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.showAlbumImage = this.showAlbumImage.bind(this);
    this.showAlbumInfo = this.showAlbumInfo.bind(this);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchAlbum(nextProps.match.params.albumId);
  // }
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

  showAlbumImage() {
    if (this.props.album) {
      return (
        <div className="art-div">
          <img src={this.props.album.image_url} className="album-art-image"/>
        </div>
      );
    }
  }

  showAlbumInfo() {
    if (this.props.album) {
      return (
        <ul className="album-info">
          <li className="album-info-title">
            {this.props.album.title}
          </li>
            <li className="track-info-artist">
              by {this.props.album.artistName}
            </li>
            <li className="track-info-description">
              {this.props.album.description}
            </li>
            <li className="track-info-year">
            Release Year: {this.props.album.year}
          </li>
        </ul>
      );
    }
  }
  render() {
    const myerrors = this.props.errors.errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
    });
  if (this.props.currentUser) {
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

        <div>
          <Link to="/albums">Back To Index</Link>
          </div>

        <div className="background-image">
          <img src={this.props.album.image_url}/>
        <div className="album-all-content-row1">
          <div className="col1">
            <div className="album-image">
              {this.showAlbumImage()}
            </div>
          </div>
          <div className="col2">
            <div className="album-info-box">
              {this.showAlbumInfo()}
            </div>
            <div>
              <h3>Tracks:</h3>
              <ul className="tracks-list-el">
                {
                  this.props.album.tracks.map(track => (
                    <TrackIndexItem key={track.id} track={track} />
                  ))
                }
              </ul>
            </div>
          </div>
          </div>
          </div>
        <footer className="ashow-footer">
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

      <div className="album-content-main">
      <div className="album-all-content-row1">
          <div className="album-image">
            {this.showAlbumImage()}
          </div>
          <div className="album-info-box">
            {this.showAlbumInfo()}
          </div>
          <div>
            <h3>Tracks:</h3>
            <ul className="tracks-list-el">
              {
                this.props.album.tracks.map(track => (
                  <TrackIndexItem key={track.id} track={track} />
                ))
              }
            </ul>
          </div>
        </div>
        </div>

      <footer className="ashow-footer">
        <p className="footer-text">
          Follow me on <a href="http://github.com/sheriffhoodie">GitHub</a> and <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">Linkedin!</a>
        </p>
      </footer>
    </div>
  );
}
}

}

export default AlbumShow;
