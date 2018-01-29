import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';

class Artist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchArtist(this.props.artistId);
  }

  render() {
    if (this.props.artist && this.props.artist.albums) {
      const albums = Object.keys(this.props.artist.albums);
      return (
        <div className="main">
          <div className="album-show-main">
          <div className="cover-div">
            <p className="cover-title">{this.props.artist.artistName}</p>
          </div>
        <div className="artist-show-body">
          <div className="artist-info">
          <img className="artist-pic" src={this.props.artist.image_url}></img>
          <div className="artist-inner-info">
          <h2>{this.props.artist.artistName}</h2>
          <h4 className="location">Hometown: {this.props.artist.location}</h4>
          </div>
        </div>
        <div className="discog-div">

          <h4 className="discog-header">Discography</h4>
          <div className="artist-discog-div">
            <ul className="albums-list">
              {albums.map((id, idx) => (
                <div className="album-item" key={idx}>
                  <Link to={`/albums/${id}`}>
                    <img className="album-artwork-show" src={this.props.artist.albums[id].artwork}></img>
                  </Link>
                  <div className="artist-albums-info">
                    <Link to={`/albums/${id}`}>
                      <h2>{this.props.artist.albums[id].title}</h2>
                    </Link>
                    <p>{this.props.artist.albums[id].year}</p>
                  </div>
                </div>
              ))}
            </ul>
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

export default Artist;
