import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

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
              <div className="index-company-logo">
              </div>
              <Link to="/">
                <h3 className="header-title">Bandom</h3>
              </Link>
            </div>
              <div className="toprow-right">
                <SearchContainer />
              </div>
            </div>
          <div className="landing-header-botrow">
            <div className="botrow-left2">
                <p className="landing-header-tagline">
                  Listen to amazing music from the newest up-and-coming artists and support them directly!
                </p>
            </div>
            <div className="botrow-right2">
              <Link to="/albums"
                className="header-link">discover</Link>
                <Link to="/login"
                  className="header-link2">log in
                </Link>
                <button
                  className="header-link2 modal-button"
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

            </div>
          </div>
        </div>
    );
  }
}

export default HeaderLoggedOut;
