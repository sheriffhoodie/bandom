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
    if (this.props.currentUser) {
      return (
        <div className="index-main">

          <HeaderContainer />

          <div className="index-page-title-div">
            <h2 className="index-page-title">Discover
            </h2></div>

          <ul className="album-items">
            {
              this.props.albums.map(album => (
                <AlbumIndexItem key={album.id} album={album} />
              ))
            }
          </ul>
          <footer className="footer">
            <p className="footer-text">
              Follow me on <a href="http://github.com/sheriffhoodie">GitHub</a> and <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">Linkedin!</a>
            </p>
          </footer>
    </div>
      );
    } else {
      // for not logged in users who are browsing landing page
      // this one contains a sign up modal, which redirects to session form
    return (
      <div className="index-main">

        <HeaderLoggedOutContainer />

        <div className="lo-index-page-title-div">
          <h2 className="lo-index-page-title">Discover
          </h2>
        </div>
        <ul className="lo-album-items">
          {
            this.props.albums.map(album => (
              <AlbumIndexItem key={album.id} album={album} />
            ))
          }
        </ul>
        <footer className="footer">
          <p className="footer-text">
            Follow me on <a href="http://github.com/sheriffhoodie">GitHub</a> and <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">Linkedin!</a>
          </p>
        </footer>
      </div>
    );
  }
}
}

export default AlbumIndex;
