import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    // debugger
    return (
      <div>
        <div id="session-company_logo">
        </div>
        <h3 className="landing-login-title"><Link
          to="/">Bandom</Link></h3>
        <ul>
          {
            this.props.albums.map(album => (
              <AlbumIndexItem key={album.id} album={album} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default AlbumIndex;
