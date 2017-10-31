import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.albums.map(album => (
              <li key={album.id} album={album}></li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default AlbumIndex;
