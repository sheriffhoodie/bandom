import React from 'react';
import { Link } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      artistId: this.props.currentUser.id,
      descriptionValue: "",
      yearValue: "",
      genreValue: "",
      fileUrl: "",
      artwork: null,
      albumId: "",
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentDidMount() {
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

  handleImageUpload(e) {
    e.preventDefault();

    let file = e.target.files[0];
    const fileReader = new FileReader();

    let that = this;
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

  handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("album[title]", this.state.titleValue);
    formData.append("album[description]", this.state.descriptionValue);
    formData.append("album[year]", this.state.yearValue);
    formData.append("album[genre]", this.state.genreValue);
    formData.append("album[artwork]", this.state.artwork);

    this.props.createAlbum(formData).then(() => (
     location.reload()));
     this.setState({loading: true});
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
        className="preview-box">Select an image for preview</div>);
    }
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
            <h3 className="info-header">Location:</h3>
            <p className="user-location">{this.props.currentUser.location}</p>
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
                <input className="form-input" type="text" onChange={this.update('genreValue')} required></input>
              </label>
              <label>Release Year:
                <input className="form-input" type="number" onChange={this.update('yearValue')} value={this.state.yearValue} required min="1900" max="2018"/>
              </label>
              <br></br>
              <label>Album Artwork:
                <div className="">
                  <input className="file-input"
                    type="file"
                    onChange={(e)=>this.handleImageUpload(e)} />
                </div>
                <div className="imgPreview-div">
                    {imagePreview}
                </div>
              </label>
              <input className="submit-input" type="submit" value="Publish Album"></input>
            </form>
          </div>
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

export default AlbumForm;
