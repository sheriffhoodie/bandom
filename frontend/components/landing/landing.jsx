import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import HeaderContainer from '../header/header_container';
import HeaderLoggedOutContainer from '../header/header_lo_container';

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
    if (this.props.currentUser) {
      return (
        <div className="landing-main">

          <HeaderContainer />

          <div className="landing-features">
            <div className="landing-main-feature">
              <div className="landing-mainfeat-headline">
                <Link to="/albums"><p className="main-headline">Kids By The Sink: Washing Their Hands Of Mediocrity
                  <br/>
                  With New Album</p></Link>
              </div>
            </div>
            <ul className="landing-sub-features">
              <li className="sub-feat1">
                <div className="landing-subfeat1-div">
                  <Link to="/albums"><p className="subfeat1-headline">New To The Scene: Llama Go-Kart</p></Link>
                </div>
              </li>
              <li className="sub-feat2">
                <div className="landing-subfeat2-div">
                  <Link to="/albums"><p className="subfeat2-headline">The Uncertified Lifeguards Rescue Alternative</p></Link>
                </div>
              </li>
              <li className="sub-feat3">
                <div className="landing-subfeat3-div">
                  <Link to="/albums"><p className="subfeat3-headline">The Latest from New York Slush</p></Link>
                </div>
              </li>
            </ul>
          </div>
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
    } else {
      // for not logged in users who are browsing landing page
      // this one contains a sign up modal, which redirects to session form
    return (
      <div className="landing-main">

        <HeaderLoggedOutContainer />

        <div className="landing-features">
          <div className="landing-main-feature">
            <div className="landing-mainfeat-headline">
              <Link to="/albums"><p className="main-headline">Kids By The Sink: Washing Their Hands Of Mediocrity
                <br/>
                With New Album</p></Link>
            </div>
          </div>
          <ul className="landing-sub-features">
            <li className="sub-feat1">
              <div className="landing-subfeat1-div">
                <Link to="/albums"><p className="subfeat1-headline">New To The Scene: Llama Go-Kart</p></Link>
              </div>
            </li>
            <li className="sub-feat2">
              <div className="landing-subfeat2-div">
                <Link to="/albums"><p className="subfeat2-headline">The Uncertified Lifeguards Rescue Alternative</p></Link>
              </div>
            </li>
            <li className="sub-feat3">
              <div className="landing-subfeat3-div">
                <Link to="/albums"><p className="subfeat3-headline">The Latest from New York Slush</p></Link>
              </div>
            </li>
          </ul>
        </div>
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

}



export default Landing;
// <button className="modal-close-button" onClick={this.closeModal}>close</button>
