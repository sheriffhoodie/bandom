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
    this.state = {
      loading: true
    };
    this.showAlbumImage = this.showAlbumImage.bind(this);
    this.showAlbumInfo = this.showAlbumInfo.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAlbum(this.props.match.params.albumId);
    this.setState({loading: false});
  }

  deleteAlbum() {
    this.props.deleteAlbum(this.props.album.id).then(() => {
      location.reload();
      this.setState({loading: true});
    });
  }

  showAlbumImage() {
    let deleteButton;
    if (this.props.album.artistId === this.props.currentUserId) {
      deleteButton = (<Link className="delete-album-link" to={`/albums`}
      onClick={this.deleteAlbum.bind(this)}>Delete Album</Link>);
    } else {
      deleteButton = null;
    }
    if (this.props.album) {
      return (
        <div className="art-div">
          <ul>
            <li className="album-info-title">
              {this.props.album.title}
            </li>
            <li className="track-info-artist">
              by <Link to={`/users/${this.props.album.artistId}`} >{this.props.album.artistName}</Link>
            </li>
            <li className="delete-album-button">
              {deleteButton}
            </li>
          </ul>
          <img src={this.props.album.artwork} className="album-art-image"/>
        </div>
      );
    }
  }

  showAlbumInfo() {
    if (this.props.album) {
      return (
        <ul className="album-info">
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
    const {loading} = this.state;
    let loader;
    if (loading) {
      loader = (<div className="loader"></div>);
    } else {
      loader = null;
    }
    const myerrors = this.props.errors.errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
    });
    return (
    <div className="index-main">
      {loader}
      <div className="album-content-main">
        <img className="background-image" src={this.props.album.artwork}/>
      <div className="album-all-content-row1">
          <div className="album-image">
            {this.showAlbumImage()}
          </div>
          <div className="album-info-box">
            {this.showAlbumInfo()}
          <div className="tracks-div">
            <h4>Tracks:</h4>
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
      <footer className="footer">
        <p className="footer-text">
          Follow me for more!
        </p>
          <a href="http://github.com/sheriffhoodie">
            <i className="icon fa fa-github-square fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">
            <i className="icon fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://angel.co/maxwell-currier">
            <i className="icon fa fa-angellist fa-3x" aria-hidden="true"></i>
          </a>
      </footer>
    </div>
  );
}

}

export default AlbumShow;
