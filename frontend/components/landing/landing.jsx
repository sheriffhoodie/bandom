import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import HeaderContainer from '../header/header_container';
import HeaderLoggedOutContainer from '../header/header_lo_container';
import Footer from '../footer';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding: '0px'
  }
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  update(input) {
    return event => this.setState({
      [input]: event.currentTarget.value
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
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
      <div className="landing-main">
        <div className="landing-features">
          <div className="landing-main-feature">
            <div className="landing-mainfeat-headline">
              <Link to="/albums/11"><p className="main-headline">Kids By The Sink: Washing Their Hands Of Mediocrity
                <br/>
                With New Album</p></Link>
            </div>
          </div>
          <ul className="landing-sub-features">
            <li className="sub-feat1">
              <div className="landing-subfeat1-div">
                <Link to="/users/11"><p className="subfeat1-headline">New To The Scene: Llama Go-Kart</p></Link>
              </div>
            </li>
            <li className="sub-feat2">
              <div className="landing-subfeat2-div">
                <Link to="/users/8"><p className="subfeat2-headline">The Uncertified Lifeguards Rescue Alternative</p></Link>
              </div>
            </li>
            <li className="sub-feat3">
              <div className="landing-subfeat3-div">
                <Link to="/albums/13"><p className="subfeat3-headline">The Latest from New York Slush</p></Link>
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
