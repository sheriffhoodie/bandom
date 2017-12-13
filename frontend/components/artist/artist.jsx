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
          <h4 className="location">Location: {this.props.artist.location}</h4>
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
                    <h2>{this.props.artist.albums[id].title}</h2>
                    <p>{this.props.artist.albums[id].year}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          </div>
        </div>
        </div>
        <footer className="footer">
          <p className="footer-text">
            Follow me for more!
          </p>
          <a href="http://github.com/sheriffhoodie">
            <i className="icon fa fa-github-square fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">
            <i className="icon fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://angel.co/maxwell-currier">
            <i className="icon fa fa-angellist fa-3x" aria-hidden="true"></i>
          </a>
        </footer>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default Artist;
