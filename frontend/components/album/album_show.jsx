import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';
import AlbumShowContainer from './album_show_container';
import TrackIndexItem from '../track/track_index_item';
import AlbumIndexContainer from './album_index_container';
import Modal from 'react-modal';
import HeaderContainer from '../header/header_container';
import HeaderLoggedOutContainer from '../header/header_lo_container';

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
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchAlbum(nextProps.match.params.albumId);
  // }

  showAlbumImage() {
    if (this.props.album) {
      return (
        <div className="art-div">
          <img src={this.props.album.artwork} className="album-art-image"/>
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
            by <Link to={`/users/${this.props.album.artistId}`} >{this.props.album.artistName}</Link>
          </li>
          <h4>Description</h4>
          <li className="track-info-description">
            {this.props.album.description}
          </li>
          <h4>Genre: </h4>
          <li className="track-info-description">
            {this.props.album.genre}
          </li>
          <h4>Release Year: </h4>
          <li className="track-info-year">
            {this.props.album.year}
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

        <HeaderContainer />

        <div>
          <Link to="/albums">Back To Index</Link>
          </div>

        <div className="album-show-main">
          <img className="background-image" src={this.props.album.image_url}/>
        <div className="album-all-content-row1">
          <div className="col1">
            <h1>{this.props.album.title}</h1>
            <div className="album-image">
              {this.showAlbumImage()}
            </div>
          </div>
          <div className="col2">
            <div className="album-info-box">
              {this.showAlbumInfo()}
            </div>
            <div className="tracks-div">
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

      <HeaderLoggedOutContainer />

      <div className="album-content-main">
        <img className="background-image" src={this.props.album.image_url}/>
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
