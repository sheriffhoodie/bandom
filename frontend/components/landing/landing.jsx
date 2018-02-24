import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../footer';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchFeaturedArtists();
  }

  render() {
    const featureds = Object.keys(this.props.featuredArtists);
    return (
      <div className="landing-main">
        <div className="landing-features">
          <div className="landing-main-feature">
            <Link to={`/users/${featureds[1]}`}>
            <img src="https://s3.us-east-2.amazonaws.com/bandom-dev/featured-artist-photos/sub-feature1.jpg"
              className="landing-mainfeat-headline"></img>
              <p className="main-headline">
                Kids By The Sink: Washing Their Hands Of Mediocrity
                <br/>
                With New Album
              </p>
            </Link>
          </div>
          <ul className="landing-sub-features">
            <li className="sub-feat1">
              <Link to={`/users/${featureds[3]}`}>
              <img src="https://s3.us-east-2.amazonaws.com/bandom-dev/featured-artist-photos/main-feature.jpg"
                className="landing-subfeat1-div"></img>
                <p className="subfeat1-headline">
                  New To The Scene: Llama Go-Kart
                </p>
              </Link>
            </li>
            <li className="sub-feat2">
              <Link to={`/users/${featureds[0]}`}>
                <img src="https://s3.us-east-2.amazonaws.com/bandom-dev/featured-artist-photos/sub-feature3.jpg"
                  className="landing-subfeat2-div"></img>
                <p className="subfeat2-headline">
                  The Uncertified Lifeguards Rescue Alternative
                </p>
              </Link>
            </li>
            <li className="sub-feat3">
              <Link to={`/users/${featureds[2]}`}>
                <img src="https://s3.us-east-2.amazonaws.com/bandom-dev/featured-artist-photos/sub-feature4.jpg"
                className="landing-subfeat3-div"></img>
                <p className="subfeat3-headline">
                  The Latest from New York Slush
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
