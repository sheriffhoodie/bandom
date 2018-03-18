import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../footer';

const genresAndColorsSelector = {
  'Rock': 'one',
  'Heavy Metal': 'two',
  'Hip-Hop': 'three',
  'Alternative': 'four',
  'Electronic': 'five',
  'Reggae': 'six',
  'Punk': 'seven',
  'Rap': 'eight',
  'R&B': 'nine',
  'Pop': 'ten',
  'Dubstep': 'eleven',
  'Folk': 'twelve',
  'Classical': 'thirteen',
  'Country': 'fourteen',
  'Jazz': 'fifteen',
  'Soundtrack': 'sixteen',
  'Latin': 'seventeen',
  'Disco': 'eightteen',
  'Instrumental': 'nineteen'
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'Alternative'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchFeaturedArtists();
  }

  handleClick(genre) {
    this.setState({selectedGenre: genre});
    const colorSelector = genresAndColorsSelector[genre];

    let genreFilter = document.querySelector('.genre-tabs');
    genreFilter.className = (
      `genre-tabs ${colorSelector}`
    );
  }

  render() {
    const featureds = Object.keys(this.props.featuredArtists);
    const genres = this.props.genres;

    let genreList = genres.map((genre, idx) => {
      let customClass = 'genre-tab';
      if (this.state.selectedGenre === genre) customClass = 'genre-tab selected';
      return (
        <li key={idx}
          className={customClass}
          onClick={this.handleClick.bind(null, genre)}>
          {genre}
        </li>
      );
    });

    let resultAlbums;
    if (this.props.albums) {
      resultAlbums = Object.values(this.props.albums).filter(
        album => album.genre === this.state.selectedGenre);
      if (resultAlbums.length === 0) {
        resultAlbums = null;
      } else {
        resultAlbums = resultAlbums.map((album, i) => (
          <li key={i} className="landing-album-item-li">
            <Link to={`/albums/${album.id}`}>
              <img src={album.artwork} className="album-pic"/>
            </Link>
            <div className="album-description-div">
              <Link to={`/albums/${album.id}`}
                className="album-title">
                {album.title}
              </Link>
              <br></br>
              by <Link to={`/users/${album.artistId}`}>{album.artistName}</Link>
            </div>
          </li>
        ));
      }
    }
    return (
      <div className="landing-main">
        <div className="landing-features">
          <div className="main-feature-outer">
            <Link to={`/users/${featureds[1]}`}>
            <div className="main-feature-inner grow">
              <img src="https://s3.us-east-2.amazonaws.com/bandom-dev/featured-artist-photos/sub-feature1.jpg"
                className="main-feature-img"></img>
              <p className="main-headline">
                Kids By The Sink: Washing Their Hands Of Mediocrity With New Album
              </p>
            </div>
            </Link>
          </div>
          <ul className="landing-sub-features">
            <li className="sub-feat1">
              <Link to={`/users/${featureds[3]}`}>
                <div className="subfeat-inner grow">
                <img src="https://s3.us-east-2.amazonaws.com/bandom-dev/featured-artist-photos/main-feature.jpg"
                  className="subfeat-img"></img>
                <p className="subfeat-headline">
                    New To The Scene: Llama Go-Kart
                  </p>
                </div>
              </Link>
            </li>
            <li className="sub-feat2">
              <Link to={`/users/${featureds[2]}`}>
                <div className="subfeat-inner grow">
                  <img src="https://s3.us-east-2.amazonaws.com/bandom-dev/featured-artist-photos/sub-feature3.jpg"
                    className="subfeat-img"></img>
                  <p className="subfeat-headline">
                    The Latest from New York Slush
                  </p>
                </div>
              </Link>
            </li>
            <li className="sub-feat3">
              <Link to={`/users/${featureds[0]}`}>
                <div className="subfeat-inner grow">
                  <img src="https://s3.us-east-2.amazonaws.com/bandom-dev/featured-artist-photos/sub-feature4.jpg"
                  className="subfeat-img"></img>
                  <p className="subfeat-headline">
                    The Uncertified Lifeguards Rescue Alternative
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="genre-filter-div">
          <h2 className="genre-filter-title">Filter by Genre</h2>
          <ul className="genre-tabs">
            {genreList}
          </ul>
          <div className="genre-filter-results">
            {resultAlbums}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
