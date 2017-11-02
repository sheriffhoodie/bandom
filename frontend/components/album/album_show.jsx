import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';
import AlbumShowContainer from './album_show_container';
import TrackIndexItem from '../track/track_index_item';

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
        <div className="album-art-view">
          <img src={this.props.album.image_url} className="album-art-img"/>
        </div>
      );
    }
  }

  showAlbumInfo() {
    if (this.props.album) {
      return (
        <ul className="album-info">
          <li className="album-info-header">
            {this.props.album.title}
          </li>
            <li>
              by {this.props.album.artistName}
            </li>
            <li>
              {this.props.album.description}
            </li>
            <li>
            Release Year: {this.props.album.year}
          </li>
            <Link to="/albums">Back To Index
            </Link>
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.showAlbumImage()}
        </div>
        <div className="album-info-box">
          {this.showAlbumInfo()}
        </div>
        <div>
          <h3>Tracks:</h3>
          <ul>
            {
              this.props.album.tracks.map(track => (
                <TrackIndexItem key={track.id} track={track} />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
