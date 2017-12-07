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
      previewUrl: '',
      artwork: null,
      albumId: ""
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
  }

  update(field) {
    return event => this.setState({
      [field]: event.target.value
    });
  }

  handleImageUpload(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        artwork: file,
        previewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  // handleImageUpload(e) {
  //   let file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //
  //   fileReader.onloadend = () => {
  //     this.setState({ artwork: file, fileUrl: fileReader.result });
  //   };
  //
  //   fileReader.onerror = () => {
  //     alert('Upload error with that file');
  //   };
  //
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   } else {
  //     this.setState({ artwork: null, fileUrl: ""});
  //   }
  // }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('album[title]', this.state.titleValue);
    formData.append('album[artistId]', this.props.currentUser.id);
    formData.append('album[genre]', this.state.genreValue);
    formData.append('album[year]', this.state.yearValue);
    formData.append('album[description]', this.state.descriptionValue);
    formData.append('album[artwork]', this.state.artwork);
    // const album = Object.assign({}, {title: this.state.titleValue,
    //   artistId: this.props.currentUser.id,
    //   genre: this.state.genreValue,
    //   year: parseInt(this.state.yearValue),
    //   description: this.state.descriptionValue,
    //   artwork: this.state.artwork
    // });
    this.props.createAlbum(formData).then(() => (
     location.reload()));
  }

  render() {
    let {previewUrl} = this.state;
    let $imagePreview = null;
    if (previewUrl) {
      $imagePreview = (<img src={previewUrl} className="imgPreview" />);
    } else {
      $imagePreview = (<div className="preview-box">Select an image for preview</div>);
    }
    if (this.props.artist && this.props.artist.albums) {
      const albums = Object.keys(this.props.artist.albums);
    return (
      <div className="album-form-main">
        <h2 className="form-title">{this.props.artist.artistName}</h2>
        <h3 className="user-location">{this.props.currentUser.location}</h3>
        <h4 className="user-discog-header">Your Collection</h4>
        <div className="album-form-body">
        <div className="user-music">
          <ul className="user-albums">
            {albums.map(id => (
              <div className="user-album-item">
                  <img className="album-artwork-show" src={this.props.artist.albums[id].artwork}></img>
                <div className="artist-albums-info">
                  <h2>{this.props.artist.albums[id].title}</h2>
                  <p>{this.props.artist.albums[id].year}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      <div className="form-main">
        <div className="create-form">
          <h2 className="section-title">Create Album</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <label>Title:
              <input className="form-input" type="text" onChange={this.update('titleValue')} value={this.state.titleValue} required/>
            </label>
            <label className="description-label">Description:
            </label>
              <textarea value={this.state.descriptionValue} onChange={this.update('descriptionValue')} rows="10" cols="70" required></textarea>
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
                  {$imagePreview}
              </div>
            </label>
            <input className="submit-input" type="submit" value="Publish Album"></input>
          </form>
        </div>
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
  else {
    return (
      <div className="album-form-main">
        <div className="album-form-body">
        <h2 className="form-title">{this.props.artist.artistName}</h2>
          <h3 className="user-location">Location: {this.props.currentUser.location}</h3>
        <h4 className="user-discog-header">Your Collection</h4>
        <div className="user-music">
          <p>You have no music published yet.</p>
        </div>
        <div className="form-main">
          <div className="create-form">
            <h2 className="form-title">Create Album</h2>
            <form className="form" onSubmit={this.handleSubmit}>
              <label>Title:
                <input className="form-input" type="text" onChange={this.update('titleValue')} value={this.state.titleValue} required/>
              </label>
              <label className="description-label">Description:
              </label>
                <textarea value={this.state.descriptionValue} onChange={this.update('descriptionValue')} rows="10" cols="70" required></textarea>
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
                    {$imagePreview}
                </div>
              </label>
              <input className="submit-input" type="submit" value="Publish Album"></input>
            </form>
          </div>
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
}

export default AlbumForm;
