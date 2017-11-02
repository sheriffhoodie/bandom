import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.albumArt = this.albumArt.bind(this);
    this.albumInfo = this.albumInfo.bind(this);
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchAlbum(nextProps.match.params.albumId);
  // }

  albumArt() {
  if (this.props.album) {
    return (
      <div className="album-art-view">
        <img src={this.props.album.image_url} className="album-art-img"/>
      </div>
    );
  }
}

albumInfo() {
  if (this.props.album) {
    return (
      <ul className="album-info">
        <li className="album-info-header">
          {this.props.album.title}
        </li>
          <li>
            {this.props.album.artistName}
          </li>
          <li>
            {this.props.album.description}
          </li>
          <li>
          {this.props.album.year}
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
          {this.albumArt()}
        </div>
        <div className="album-info-box">
          {this.albumInfo()}
        </div>
        <div>
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
