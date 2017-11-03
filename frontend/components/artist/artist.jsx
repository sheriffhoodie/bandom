import React from 'react';
import { Link } from 'react-router-dom';

class Artist extends React.Component {
  constructor(props) {
    super(props);
    // this.albumArtwork = this.albumArtwork.bind(this);
    // this.artistAlbums = this.artistAlbums.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  // albumArtwork(id) {
  //   return (
  //     <Link to={`/albums/${id}`}>
  //       <img className="album-artwork-show" src={this.props.artist.albums[id].image_url}></img>
  //     </Link>
  //   );
  // }

  // artistAlbums() {
  //   const albums = Object.keys(this.props.artist.albums);
  //   if (this.props.artist.albums) {
  //     return (
  //       <ul>
  //         {albums.map(id => (
  //           <div>
  //             {this.albumArtwork(id)}
  //             <div className="artist-albums-info">
  //               <h2>{this.props.artist.albums[id].title}</h2>
  //               <p>{this.props.artist.albums[id].year}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  render() {
    if (this.props.artist && this.props.artist.albums) {
      const albums = Object.keys(this.props.artist.albums);
      return (
        <div className="artist-show-main">
          <div className="artist-info-div">
            <ul className="artists-list">
              {albums.map(id => (
                <div>
                  <Link to={`/albums/${id}`}>
                    <img className="album-artwork-show" src={this.props.artist.albums[id].image_url}></img>
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
