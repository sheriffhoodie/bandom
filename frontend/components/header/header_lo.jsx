import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  overlay : {
    zIndex: '5'
  },
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

class HeaderLoggedOut extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
        <div className="landing-header">
          <div className="landing-header-toprow">
            <div className="toprow-left">
              <div id="session-company_logo">
              </div>
              <h3 className="index-title"><Link
                to="/">Bandom</Link></h3>
            </div>
              <div className="toprow-right">
                <label>
                  <div className="search-bar">
                    <input type="text"
                      className="search-input"
                      placeholder="Search for artist, track or album"/>
                    <span className="search-icon"></span>
                  </div>
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
                  className="landing-header-li">log in
                </Link>
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
    );
  }
}

export default HeaderLoggedOut;
