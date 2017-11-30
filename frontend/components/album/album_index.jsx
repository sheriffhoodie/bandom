import React from 'react';
import AlbumIndexItem from './album_index_item';
import HeaderLoggedOutContainer from '../header/header_lo_container';
import HeaderContainer from '../header/header_container';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  update(input) {
    return event => this.setState({
      [input]: event.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
        //first render is for logged in status, second is for not logged in
    const myerrors = this.props.errors.errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
    });
    return (
      <div className="index-main">
        <div className="index-page-title-div">
          <h2 className="index-page-title">Discover</h2>
        </div>
        <ul className="album-items">
          {
            this.props.albums.map(album => (
              <AlbumIndexItem key={album.id} album={album} />
            ))
          }
        </ul>
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
  }
}

export default AlbumIndex;
