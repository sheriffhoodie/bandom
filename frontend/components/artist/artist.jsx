import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';
import TrackIndexItem from '../track/track_index_item';
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
      let albums = Object.values(this.props.artist.albums);
      albums = albums.sort(function(a, b) {
        return b.year - a.year;
      });
      return (
        <div className="main">
          <div className="album-show-main">
            <div className="artist-show-body">
              <div className="artist-info">
                <div className="artist-inner-info">
                  <h2 className="artist-name">{this.props.artist.artistName}</h2>
                  <h4 className="location">Hometown: {this.props.artist.location}</h4>
                </div>
                <img className="artist-pic" src={this.props.artist.image_url}></img>
              </div>
              <div className="discog-div">
                <h4 className="discog-header">Discography</h4>
                <div className="artist-discog-div">
                  <ul className="albums-list">
                    {albums.map((item, idx) => (
                      <div className="album-item" key={idx}>
                        <div className="album-item-top">
                          <Link to={`/albums/${item.id}`}>
                            <img className="album-item-artwork" src={item.artwork}></img>
                          </Link>
                          <div className="album-item-info">
                            <Link to={`/albums/${item.id}`}>
                            <h2 className="album-item-info-title">{item.title}</h2>
                            </Link>
                            <p>{item.year}</p>
                          </div>
                        </div>
                        <div className="album-item-tracks">
                          {item.tracks.sort((a, b) => {
                            return a.ord - b.ord;
                          }).map((track, idx2) => (
                            <TrackIndexItem key={idx2} track={track} />
                          ))}
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
