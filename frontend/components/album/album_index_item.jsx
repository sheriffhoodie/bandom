import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AlbumIndexContainer from './album_index_container';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const albumId = this.props.album.id;
    this.props.history.push(`/albums/${albumId}`);
  }

  render() {
    const album = this.props.album;
    return (
      <div className="album-block">
        <li className="album-item-li">
          <Link to={`/albums/${album.id}`}>
            <img src={album.artwork} className="album-pic"/>
          </Link>
          <div className="album-description-div">
            <Link to={`/albums/${album.id}`} className="album-title" onClick={this.handleClick}>
              {album.title}
            </Link>
            <br></br>
            by <Link to={`/users/${album.artistId}`}>{album.artistName}</Link>
          <p className="album-item-li-genre">{album.genre}</p>
          </div>
        </li>
      </div>
    );
    }
  }

export default withRouter(AlbumIndexItem);
