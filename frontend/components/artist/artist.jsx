import React from 'react';
import { Link } from 'react-router-dom';

class Artist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  render() {
    if (this.props.artist && this.props.artist.albums) {
      // debugger
      const albums = Object.keys(this.props.artist.albums);
      return (
        <div className="artist-show-main">
          <h3 className="discog-header">Discography from {this.props.artist.artistName}</h3>
          <div className="artist-info-div">
            <ul className="albums-list">
              {albums.map(id => (
                <div className="album-item">
                  <Link to={`/albums/${id}`}>
                    <img className="album-artwork-show" src={this.props.artist.albums[id].image}></img>
                  </Link>
                  <div className="artist-albums-info">
                    <h2>{this.props.artist.albums[id].title}</h2>
                    <p>{this.props.artist.albums[id].year}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <footer className="arshow-footer">
            <p className="footer-text">
              Follow me on <a href="http://github.com/sheriffhoodie">GitHub</a> and <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">Linkedin!</a>
            </p>
          </footer>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Artist;
