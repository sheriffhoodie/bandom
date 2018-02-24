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
            <Link to="/albums/11">
              <div className="landing-mainfeat-headline">
              </div>
              <p className="main-headline">
                Kids By The Sink: Washing Their Hands Of Mediocrity
                <br/>
                With New Album
              </p>
            </Link>
          </div>
          <ul className="landing-sub-features">
            <li className="sub-feat1">
              <Link to="/users/11">
                <div className="landing-subfeat1-div">
                </div>
                <p className="subfeat1-headline">
                  New To The Scene: Llama Go-Kart
                </p>
              </Link>
            </li>
            <li className="sub-feat2">
              <Link to="/users/8">
                <div className="landing-subfeat2-div">
                </div>
                <p className="subfeat2-headline">
                  The Uncertified Lifeguards Rescue Alternative
                </p>
              </Link>
            </li>
            <li className="sub-feat3">
              <Link to="/albums/13">
                <div className="landing-subfeat3-div">
                </div>
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
