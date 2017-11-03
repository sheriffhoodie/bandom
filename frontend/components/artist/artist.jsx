import React from 'react';

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.albumArtwork = this.albumArtwork.bind(this);
    this.artistAlbums = this.artistAlbums.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  albumArtwork(id) {
    return (
      <Link to={`/albums/${id}`}>
        <img className="album-artwork-show" src={this.props.artist.albums[id].image_url}></img>
      </Link>
    );
  }

  artistAlbums() {
    const albums = Object.keys(this.props.artist.albums);
    if (this.props.artist.albums) {
      return (
        <ul>
          {albums.map(id => (
            <div>
              {this.albumArtwork(id)}
              <div className="artist-albums-info">
                <h2>{this.props.artist.albums[id].title}</h2>
                <p>{this.props.artist.albums[id].year}</p>
              </div>
            </div>
          ))}
        </ul>
      );
    }
  }

  render() {
    if (this.props.artist) {
      return (
        <div>
          {this.artistAlbums}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Artist;
