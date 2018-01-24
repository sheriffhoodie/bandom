import React from 'react';
import AlbumIndexItem from './album_index_item';
import Footer from '../footer';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  update(input) {
    return event => this.setState({
      [input]: event.currentTarget.value
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAlbums();
    this.setState({loading: false});
  }

  render() {
    const {loading} = this.state;
    let loader;
    if (loading) {
      loader = (<div className="loader"></div>);
    } else {
      loader = null;
    }
    const myerrors = this.props.errors.errors.map((error, i) => {
      return (
        <li key={`error-${i}`}>
          {error}
        </li>
      );
    });
    return (
      <div className="index-main">
        {loader}
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
        <Footer />
      </div>
    );
  }
}

export default AlbumIndex;
