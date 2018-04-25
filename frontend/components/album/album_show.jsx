import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';
import TrackIndexItem from '../track/track_index_item';
import AlbumShowContainer from './album_show_container';
import AlbumIndexContainer from './album_index_container';
import Footer from '../footer';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.showAlbumImage = this.showAlbumImage.bind(this);
    this.showAlbumInfo = this.showAlbumInfo.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAlbum(parseInt(this.props.match.params.albumId));
    this.setState({loading: false});
  }

  deleteAlbum(e) {
    this.props.deleteAlbum(this.props.album.id);
  }

  showAlbumImage() {
    let deleteButton;
    if (this.props.album.artistId === this.props.currentUserId) {
      deleteButton = (<li className="delete-album-button">
      <Link className="delete-album-link" to={`/albums`}
      onClick={this.deleteAlbum.bind(this)}>Delete Album</Link></li>);
    } else {
      deleteButton = null;
    }
    if (this.props.album) {
      return (
        <div className="art-div">
          <ul className="art-div-ul">
            <li className="album-info-title">
              {this.props.album.title}
            </li>
            <li className="album-info-artist">
              by <Link to={`/users/${this.props.album.artistId}`} >
              {this.props.album.artistName}</Link>
            </li>
              {deleteButton}
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
          <h4 className="album-show-h4">Description</h4>
          <li className="album-info-description">
            {this.props.album.description}
          </li>
          <h4>Genre: </h4>
          <li className="album-info-description">
            {this.props.album.genre}
          </li>
          <h4>Release Year: </h4>
          <li className="album-info-description">
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
    let tracks;
    if (this.props.album) {
      tracks = this.props.album.tracks.sort().map((track, idx) => (
        <TrackIndexItem key={idx} track={track} />
      ));
    } else {
      tracks = (
        <span>
          <p>Loading Tracks  <i className="fa fa-spinner fa-spin"></i>
          </p>
        </span>
      );
    }
    if (this.props.album) {
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
                <h4 className="album-show-h4">Tracks:</h4>
                <div className="tracks-list-el">
                  { tracks }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
    } else {
      return null;
    }
  }
}

export default AlbumShow;
