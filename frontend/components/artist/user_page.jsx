import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import logo from '../../../app/assets/images/googlelogo2.png';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Footer from '../footer';

const customStyles = {
  overlay : {
    zIndex: '5'
  },
  content : {
    top                   : '53%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding: '0px'
  }
};

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistId: this.props.currentUser.id,
      loading: true,
      profilePic: null,
      imageUrl: this.props.currentUser.image_url,
      location: this.props.currentUser.location,
      modalIsOpen: false,
    };
    this.handlePPUpload = this.handlePPUpload.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = (location) => this.setState({ location });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchArtist(this.props.artistId);
    if (this.props.fetchAlbum) {
      this.props.fetchAlbum(this.props.album.id);
    }
    this.setState({loading: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handlePPUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ profilePic: file, imageUrl: fileReader.result });
    };
    fileReader.onerror = () => {
      alert('Upload error with that file');
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ profilePic: null, imageUrl: ""});
    }
  }

  updateInfo () {
    const artistState = {
      imageUrl: this.state.imageUrl,
      profilePic: this.state.profilePic,
      username: this.props.currentUser.artistName,
      location: this.state.location,
      id: this.props.currentUser.id
    };
    this.setState({loading: true});
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
    const artistData = new FormData;
    artistData.append("user[username]", artistState.username);
    artistData.append("user[location]", artistState.location);
    artistData.append("user[image]", artistState.imageUrl);
    artistData.append("user[id]", artistState.id);
    this.props.updateArtist(artistData).then(() => {
      location.reload();
      window.scrollTo(0, 0);
    });
  }

  render () {
    let {imageUrl} = this.state;
    let profilePicPreview = null;
    if (imageUrl) {
      profilePicPreview = (<img src={imageUrl} className="profile-img-preview" />);
    } else {
      profilePicPreview = (<div
        className="preview-box">
        <i className="fa fa-picture-o fa-4x" aria-hidden="true"></i>
      </div>);
    }
    const {loading} = this.state;
    let loader;
    if (loading) {
      loader = (<div className="loader"></div>);
    } else {
      loader = null;
    }
    const inputProps = {
      value: this.state.location,
      onChange: this.onChange,
      autoFocus: false,
      type: 'search',
      placeholder: 'Search for a place...'
    };
    const renderFooter = () => (
      <div className="dropdown-footer">
        <div>
          <img src={'https://s3.us-east-2.amazonaws.com/bandom-dev/albums/images/googlelogo2.png'}
            className="dropdown-footer-image"/>
        </div>
      </div>
    );
    const cssClasses = {
      input: "location-input"
    };
    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="suggestion-item">
        <i className="fa fa-map-marker suggestion-icon" />
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">
          {formattedSuggestion.secondaryText}
        </small>
      </div>
    );
    let userMusic = null;
    if (this.props.artist && this.props.artist.albums) {
      const albums = Object.keys(this.props.artist.albums);
      userMusic = (<ul className="user-albums">
        {albums.reverse().map((id) => (
          <div className="user-album-item" key={id}>
            <Link to={`/albums/${id}`}>
              <img className="album-artwork-show"
                src={this.props.artist.albums[id].artwork}></img>
            </Link>
            <div className="artist-albums-info">
              <h2 className="user-album-item-title">
                {this.props.artist.albums[id].title}</h2>
              <p className="user-album-item-year">
                {this.props.artist.albums[id].year}</p>
            </div>
          </div>
        ))}
      </ul>);
    } else {
      userMusic = (<p>You have no music published yet.</p>);
    }
    return (
      <div className="user-page-main">
      <div>
        {loader}
        <h2 className="form-title">{this.props.artist.artistName}</h2>
        <img className="profile-photo"
          src={this.props.currentUser.image_url}></img><br></br>
          <h3 className="info-header">Hometown:</h3>
        <p className="user-location">{this.props.currentUser.location}</p>
        <button
          className="form-modal-button"
          onClick={this.openModal}>Update Your Info</button>
          <div className="user-div">
            <h4 className="user-discog-header">Your Collection</h4>
            <div className="user-music">
              {userMusic}
            </div>
          </div>

        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
            style={customStyles}>
          <form className="form-modal-box">
            <div className="modal-title-div">
              <h2 className="modal-title-div">Edit Your Info</h2>
              <i className="close-button fa fa-times" aria-hidden="true"
                onClick={this.closeModal}></i>
            </div>
            <div className="form-modal-div">
              <div className="modal-div-left">
                <p className="modal-text">Set new profile picture:</p>
                {profilePicPreview}
                <input className="change-photo-button" type="file"
                  onChange={(e)=>this.handlePPUpload(e)} />
              </div>
              <div className="modal-div-right">
                <p className="modal-text">Choose new hometown:</p>
                <PlacesAutocomplete inputProps={inputProps}
                    classNames={cssClasses}
                    renderFooter={renderFooter}
                    renderSuggestion={AutocompleteItem}/>
              </div>
            </div>
            <button className="submit-edits"
              onClick={this.updateInfo.bind(this)}>Submit Changes</button>
          </form>
        </Modal>

      </div>
      <Footer />
    </div>
  );
  }
}

export default UserPage;
