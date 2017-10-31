
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AlbumIndexCaontainer from './album_index_container';


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
    debugger
    return (
      <li>
        <Link to={`/albums/${album.id}`} onClick={this.handleClick}>
          {album.title}
        </Link>
        <Link to={`/users/${album.artistName}`}>{album.artistName}</Link>
        <p>{album.description}</p>
        <p>{album.year}</p>
      </li>);
    }
  }

export default withRouter(AlbumIndexItem);
