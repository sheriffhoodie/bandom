import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  update(input) {
    return event => this.setState({
      [input]: event.currentTarget.value
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
          <div className="landing-header">
            <div className="landing-header-toprow">
              <div className="toprow-left">
                <div id="session-company_logo">
                </div>
                <h3 className="landing-login-title"><Link
                  to="/login">Bandom</Link></h3>
              </div>
                <div className="toprow-right">
                  <label>
                    <input type="text"
                      className="search-bar"
                      placeholder="Search for artist, track or album"/>
                  </label>
                </div>
              </div>
            <div className="landing-header-botrow">
              <div className="botrow-left">
                  <p className="landing-header-username">
                    Hi, {this.props.currentUser.username}</p>
                <Link to="/login"
                  className="landing-header-li">your site</Link>
              </div>
              <div className="botrow-right">
                <ul className="right-nav-list">
                <li>
                  <Link to="/albums"
                    className="landing-header-li">discover</Link>
                </li>
                <li>
                  <Link to="/logout"
                    className="landing-header-li"
                    onClick={this.handleLogout}>log out</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="landing-features">
            <div className="landing-main-feature">
              <div className="landing-mainfeat-headline">
                <a href="#"><p className="main-headline">Kids By The Sink: Washing Their Hands Of Mediocrity
                  <br/>
                  With New Album</p></a>
              </div>
            </div>
            <ul className="landing-sub-features">
              <li className="sub-feat1">
                <div className="landing-subfeat1-div">
                  <a href="#"><p className="subfeat1-headline">New To The Scene: Llama Go-Kart</p></a>
                </div>
              </li>
              <li className="sub-feat2">
                <div className="landing-subfeat2-div">
                  <a href="#"><p className="subfeat2-headline">The Uncertified Lifeguards Rescue Alternative</p></a>
                </div>
              </li>
              <li className="sub-feat3">
                <div className="landing-subfeat3-div">
                  <a href="#"><p className="subfeat3-headline">The Latest from New York Slush</p></a>
                </div>
              </li>
            </ul>
          </div>
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
      <div className="landing-main">
        <div className="landing-header">
          <div className="landing-header-toprow">
            <div className="toprow-left">
              <div id="session-company_logo">
              </div>
              <h3 className="landing-login-title"><Link
                to="/login">Bandom</Link></h3>
            </div>
              <div className="toprow-right">
                <label>
                  <input type="text"
                    className="search-bar"
                    placeholder="Search for artist, track or album"/>
                </label>
              </div>
            </div>
          <div className="landing-header-botrow">
            <div className="botrow-left">
                <p className="landing-header-tagline">
                  Listen to amazing music from the newest up-and-coming artists and support them directly!
                </p>
            </div>
            <div className="botrow-right">
              <ul className="right-nav-list">
              <li>
                <Link to="/albums"
                  className="landing-header-li">discover</Link>
              </li>
              <li>
                <Link to="/login"
                  className="landing-header-li second-child">log in</Link>
              </li>
              <li>
                <button
                  className="landing-header-li modal-button"
                  onClick={this.openModal}>sign up</button>

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  shouldCloseOnOverlayClick={true}
                  style={customStyles}>
                  <form onSubmit={this.handleSubmit} className="modal-form-box">
                    <div className="modal-title-div">
                      <h2 className="modal-title-div">Sign up for a Bandom Account</h2>
                    </div>
                    <div className="modal-div">
                      <span className="band-icon"></span>
                      <Link to="/signup" className="signup-modal-button">Sign up as an artist</Link>
                    </div>
                  </form>
                </Modal>

              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="landing-features">
          <div className="landing-main-feature">
            <div className="landing-mainfeat-headline">
              <a href="#"><p className="main-headline">Kids By The Sink: Washing Their Hands Of Mediocrity
                <br/>
                With New Album</p></a>
            </div>
          </div>
          <ul className="landing-sub-features">
            <li className="sub-feat1">
              <div className="landing-subfeat1-div">
                <a href="#"><p className="subfeat1-headline">New To The Scene: Llama Go-Kart</p></a>
              </div>
            </li>
            <li className="sub-feat2">
              <div className="landing-subfeat2-div">
                <a href="#"><p className="subfeat2-headline">The Uncertified Lifeguards Rescue Alternative</p></a>
              </div>
            </li>
            <li className="sub-feat3">
              <div className="landing-subfeat3-div">
                <a href="#"><p className="subfeat3-headline">The Latest from New York Slush</p></a>
              </div>
            </li>
          </ul>
        </div>
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



export default Landing;
// <button className="modal-close-button" onClick={this.closeModal}>close</button>
