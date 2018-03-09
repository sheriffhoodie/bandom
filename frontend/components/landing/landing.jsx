import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GenreIndexItem from './genre_index_item';
import Footer from '../footer';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchFeaturedArtists();
  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    const featureds = Object.keys(this.props.featuredArtists);
    const genres = this.props.genres;
    const resultAlbums = this.props.albums.filter(
      album => album.genre === this.props.true);
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
            {
              this.props.genres.map((genre, idx) => (
                <li key={idx}
                  className="genre-tab"
                  onClick={this.handleClick}>
                  {genre}
                </li>
              ))
            }
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
