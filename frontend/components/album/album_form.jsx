import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';

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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleArtworkUpload = this.handleArtworkUpload.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.addedTracks = this.addedTracks.bind(this);
    this.handleTrackUpload = this.handleTrackUpload.bind(this);
    this.clearTracks = this.clearTracks.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchArtist(this.props.artistId);
    if (this.props.fetchAlbum) {
      this.props.fetchAlbum(this.props.album.id);
    }
    this.setState({loading: false});
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
    let imgExtensions = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG'];
    let ext = file.name.split('.').pop();
    if (file) {
      if (!imgExtensions.includes(ext)) {
        alert('Warning: Artwork file must be an image file type (jpg, jpeg, png).');
        return;
      }
    }
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

  addTrack(event) {
    event.preventDefault();
    if (this.state.trackTitle === "") {
      alert('Warning: Missing title for that track. Please try again.');
      return;
    }
    if (this.state.trackUrl === "") {
      alert('Warning: Missing audio file for that track. Please try again.');
      return;
    }
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
    let ext = file.name.split('.').pop();
    if (file) {
      if (ext !== 'mp3') {
        alert('Warning: Track file must be an mp3 file.');
        return;
      }
    }
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

  clearTracks(event) {
    event.preventDefault();
    this.setState({tracks: []});
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
  // Debugging async track creation 
  // createTracks(tracks, albumId) {
  //   let returnId;
  //   tracks.forEach((track, idx) => {
  //     let trackData = new FormData();
  //     trackData.append("track[title]", track.title);
  //     trackData.append("track[ord]", idx + 1);
  //     trackData.append("track[album_id]", albumId);
  //     trackData.append("track[audio_file]", track.audioUrl);
  //     this.props.createTrack(trackData).then((newAlbumId) => (
  //       returnId = newAlbumId
  //     ));
  //   });
  //   return returnId;
  // }

  handleSubmit(event) {
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
    if (this.state.tracks.length === 0) {
      alert('Album creation requires at least one track for publishing.');
      return;
    }
    this.setState({loading: true});
    this.props.createAlbum(formData).then((album) => (
      this.createTracks(this.state.tracks, album.id))).then((id) => (
          this.props.history.push(`/albums/${id}`)));
    window.scrollTo(0, 0);
  }


  render() {
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
        className="preview-box">
        <i className="fa fa-picture-o fa-4x" aria-hidden="true"></i>
      </div>);
    }
    return (
      <div className="album-form-main">
        {loader}
        <div className="album-form-content">
          <h2 className="form-title">Create Album</h2>
            <div className="create-form">
              <form className="" onSubmit={this.handleSubmit}>
                  <div className="form-section">
                    <span>1</span>Title & Description
                  </div>
                  <div className="inner-form-div">
                    <label>Album Title
                      <input autoFocus className="" type="text"
                        onChange={this.update('titleValue')}
                        value={this.state.titleValue} required/>
                    </label>
                    <label>Description
                      <textarea
                        value={this.state.descriptionValue}
                        className="album-description-input"
                        onChange={this.update('descriptionValue')}
                        rows="5" cols="50"
                        required></textarea>
                    </label>
                  </div>
                  <div className="form-section">
                    <span>2</span>Genre & Release Year
                  </div>
                  <div className="inner-form-div2">
                    <div className="form-split-left">
                    <label>Genre
                      <select id="genres" value={this.state.genreValue}
                        className="album-genre-input"
                        onChange={this.updateGenre('genreValue')} required>
                        <option value="" disabled>Choose a genre</option>
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
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
                  </div>
                  <div className="form-split-right">
                    <label>Release Year
                      <input className="album-year-input" type="number"
                        onChange={this.update('yearValue')}
                        value={this.state.yearValue} required
                        min="1900" max="2018"/>
                    </label>
                  </div>
                </div>
                  <div className="form-section">
                    <span>3</span>Artwork (optional)
                  </div>
                  <div className="inner-form-div">
                    <label>Album Artwork
                      <div className="">
                        <input className="file-input"
                          type="file"
                          onChange={(e)=>this.handleArtworkUpload(e)} />
                      </div>
                      <div className="imgPreview-div">
                          {imagePreview}
                      </div>
                    </label>
                  </div>
                  <div className="form-section">
                    <span>4</span>Upload Tracks
                  </div>
                  <div className="inner-form-div">
                    <div className="form-tracks-div">
                      <div className="uploaded-tracks">
                        <label>Current Tracks:
                          {this.addedTracks()}
                        </label>
                        <button
                          onClick={(e) => this.clearTracks(e)}
                          className="clear-tracks-button">
                          Clear
                        </button>
                      </div>
                      <div className="track-upload-box">
                        <label>Add Track Title
                          <input
                            type="text"
                            className="track-title-input"
                            onChange={this.update('trackTitle')}
                            value={this.state.trackTitle}
                            placeholder="Track Title"
                            />
                          <div className="track-upload">
                            <p>Add MP3 Audio File</p>
                            <input className="file-input"
                              type="file"
                              onChange={(e)=>this.handleTrackUpload(e)} />
                          </div>
                        </label>
                        <button className="add-track-button"
                          onClick={this.addTrack}>Upload Track</button>
                      </div>
                    </div>
                  </div>
                <input className="submit-input" type="submit"
                  value="Publish Album"></input>
              </form>
            </div>
          </div>
      <Footer />
    </div>
    );
  }
}

export default AlbumForm;
