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

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      artistId: this.props.currentUser.id,
      descriptionValue: "",
      yearValue: "",
      genreValue: "Pop",
      fileUrl: "",
      artwork: null,
      albumId: "",
      tracks: [],
      trackTitle: "",
      trackUrl: "",
      loading: true,
      modalIsOpen: false,
      profilePic: null,
      imageUrl: this.props.currentUser.image_url,
      location: this.props.currentUser.location
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleArtworkUpload = this.handleArtworkUpload.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addSong = this.addSong.bind(this);
    this.addedTracks = this.addedTracks.bind(this);
    this.handleTrackUpload = this.handleTrackUpload.bind(this);
    this.handlePPUpload = this.handlePPUpload.bind(this);
    this.onChange = (location) => this.setState({ location });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchArtist(this.props.artistId);
    if (this.props.fetchAlbum) {
      this.props.fetchAlbum(this.props.album.id);
    }
    this.setState({loading: false});
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

  update(field) {
    return event => this.setState({
      [field]: event.target.value
    });
  }

  updateGenre(field) {
    let selected = document.getElementById('genres');
    return event => this.setState({
      [field]: selected.options[selected.selectedIndex].text
    });
  }

  handleArtworkUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ artwork: file, fileUrl: fileReader.result });
    };

    fileReader.onerror = () => {
      alert('Upload error with that file');
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ artwork: null, fileUrl: ""});
    }
  }

  addedTracks() {
    if (this.state.tracks !== []) {
      return(
        <ul>
          {this.state.tracks.map((track, i) => (
            <li key={i}>
              {i + 1}. {track.title}
            </li>
          ))}
        </ul>
      );
    }
  }

  addSong(event) {
    event.preventDefault();
    this.state.tracks.push({
      title: this.state.trackTitle,
      audioUrl: this.state.trackUrl
    });
    this.setState({
      trackTitle: "",
      trackUrl: "",
    });
  }

  handleTrackUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ trackUrl: file });
    };

    fileReader.onerror = () => {
      alert('Upload error with that file');
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ trackUrl: ""});
    }
  }

  createTracks(tracks, albumId) {
    tracks.forEach((track, idx) => {
      let trackData = new FormData();
      trackData.append("track[title]", track.title);
      trackData.append("track[ord]", idx + 1);
      trackData.append("track[album_id]", albumId);
      trackData.append("track[audio_file]", track.audioUrl);
      this.props.createTrack(trackData);
      });
    return albumId;
  }

  handleSubmit(event) {
    if (this.state.tracks === []) {
      new Error('Album creation requires at least one track for publishing.');
      return;
    }
    event.preventDefault();
    let formData = new FormData();
    formData.append("album[title]", this.state.titleValue);
    formData.append("album[description]", this.state.descriptionValue);
    formData.append("album[year]", this.state.yearValue);
    formData.append("album[genre]", this.state.genreValue);
    formData.append("track[track_image]",
    "https://s3.us-east-2.amazonaws.com/bandom-dev/tracks/musicnote.png");
    if (this.state.artwork !== null) {
      formData.append("album[artwork]", this.state.artwork);
    }
    this.props.createAlbum(formData).then((album) => (
      this.createTracks(this.state.tracks, album.id))).then((albumId) => (
        setTimeout(()=> this.props.history.push(`/albums/${albumId}`), 7500)));
      this.setState({loading: true});
      window.scrollTo(0, 0);
  }

  render() {
    let {imageUrl} = this.state;
    let profilePicPreview = null;
    if (imageUrl) {
      profilePicPreview = (<img src={imageUrl} className="profile-img-preview" />);
    } else {
      profilePicPreview = (<div
        className="preview-box">Select an image for preview</div>);
    }
    const {loading} = this.state;
    let loader;
    if (loading) {
      loader = (<div className="loader"></div>);
    } else {
      loader = null;
    }
    let {fileUrl} = this.state;
    let imagePreview = null;
    if (fileUrl) {
      imagePreview = (<img src={fileUrl} className="img-preview" />);
    } else {
      imagePreview = (<div
        className="preview-box">Select an image for preview</div>);
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
      <div className="album-form-main">
        <div className="all-form-content">
          {loader}
          <div className="form-left-side">
            <h2 className="form-title">{this.props.artist.artistName}</h2>
            <img className="profile-photo"
              src={this.props.currentUser.image_url}></img><br></br>
              <h3 className="info-header">Hometown:</h3>
            <p className="user-location">{this.props.currentUser.location}</p>
            <button
              className="form-modal-button"
              onClick={this.openModal}>Update Your Info</button>
            <div className="album-form-body">
              <div className="user-div">
                <h4 className="user-discog-header">Your Collection</h4>
                <div className="user-music">
                  {userMusic}
                </div>
              </div>
            </div>
          </div>
          <div className="create-form">
            <h2 className="section-title">Create Album</h2>
            <form className="form" onSubmit={this.handleSubmit}>
              <label>Title:
                <input className="form-input" type="text" onChange={this.update('titleValue')} value={this.state.titleValue} required/>
              </label>
              <br></br>
              <label className="description-label">Description:
              </label><br></br>
                <textarea value={this.state.descriptionValue} onChange={this.update('descriptionValue')} rows="5" cols="50" required></textarea>
              <br></br>
              <label>Genre:
                <select id="genres" value={this.state.genreValue} onChange={this.updateGenre('genreValue')} required>
                  <option value="" disabled>Choose a genre</option>
                  <option value="Rock">Rock</option>
                  <option value="props">Pop</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Dubstep">Dubstep</option>
                  <option value="Classical">Classical</option>
                  <option value="Alternative">Alternative</option>
                  <option value="Punk">Punk</option>
                  <option value="Country">Country</option>
                  <option value="Latin">Latin</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Soundtrack">Soundtrack</option>
                  <option value="Folk">Folk</option>
                  <option value="Hip-Hop">Hip-Hop</option>
                  <option value="Rap">Rap</option>
                  <option value="Reggae">Reggae</option>
                  <option value="R&B">R&B</option>
                  <option value="Disco">Disco</option>
                  <option value="Heavy Metal">Heavy Metal</option>
                  <option value="Instrumental">Instrumental</option>
                </select>
              </label>
              <label>Release Year:
                <input className="form-input" type="number" onChange={this.update('yearValue')} value={this.state.yearValue} required min="1900" max="2018"/>
              </label>
              <br></br>
              <label>Album Artwork:
                <div className="">
                  <input className="file-input"
                    type="file"
                    onChange={(e)=>this.handleArtworkUpload(e)} />
                </div>
                <div className="imgPreview-div">
                    {imagePreview}
                </div>
              </label>
              <div className="uploaded-tracks">
              <label>Tracks:
                {this.addedTracks()}
              </label>
              </div>
              <div className="track-upload-box">
                <label>Add Tracks
                  <br></br>
                  <input
                    type="text"
                    className="track-title-input"
                    onChange={this.update('trackTitle')}
                    value={this.state.trackTitle}
                    placeholder="Track Title"
                    />
                  <div className="track-upload">
                    <p>Upload MP3 Audio Files Here</p>
                    <input className="file-input"
                      type="file"
                      onChange={(e)=>this.handleTrackUpload(e)} />
                  </div>
                </label>
                <button className="add-track-button" onClick={this.addSong}>Upload Track</button>
              </div>
              <br></br>
              <input className="submit-input" type="submit"
                value="Publish Album"></input>
            </form>

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
        </div>
      <Footer />
    </div>
    );
  }
}

export default AlbumForm;
