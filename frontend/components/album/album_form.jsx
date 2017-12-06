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
      artwork: '',
      albumId: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
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

  handleImageChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    let artwork = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        artwork: '',
        previewUrl: reader.result
      });
    };

    reader.readAsDataURL(artwork);
  }

  // handleImageChange(e) {
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
    const album = Object.assign({}, {title: this.state.titleValue,
      artistId: this.props.currentUser.id,
      genre: this.state.genreValue,
      year: parseInt(this.state.yearValue),
      description: this.state.descriptionValue,
      artwork: this.state.previewUrl
    });
    this.props.createAlbum(album).then(() => (
     location.reload()));
  }

  render() {
    if (this.props.artist && this.props.artist.albums) {
      const albums = Object.keys(this.props.artist.albums);
      let {previewUrl} = this.state;
      let $imagePreview = null;
      if (previewUrl) {
        $imagePreview = (<img src={previewUrl} className="imgPreview" />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
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
          <h2 className="form-title">Create Album</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <label>Title:
              <input className="form-input" type="text" onChange={this.update('titleValue')} value={this.state.titleValue}/>
            </label>
            <label>Description:
              <textarea value={this.state.descriptionValue} onChange={this.update('descriptionValue')}></textarea>
            </label>
            <label>Genre:
              <input className="form-input" type="text" onChange={this.update('genreValue')}></input>
            </label>
            <br></br>
            <label>Release Year:
              <input className="form-input" type="number" onChange={this.update('yearValue')} value={this.state.yearValue}/>
            </label>
            <br></br>
            <label>Album Artwork:
              <div className="previewComponent">
                <input className="fileInput"
                  type="file"
                  onChange={(e)=>this.handleImageChange(e)} />
              </div>
              <div className="imgPreview-div">
                  {$imagePreview}
              </div>
            </label>
            <input className="submit-input" type="submit" value="Submit"></input>
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
    let {previewUrl} = this.state;
    let $imagePreview = null;
    if (previewUrl) {
      $imagePreview = (<img src={previewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
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
              <input className="form-input" type="text" onChange={this.update('titleValue')} value={this.state.titleValue}/>
            </label>
            <label>Description:
              <textarea value={this.state.descriptionValue} onChange={this.update('descriptionValue')}></textarea>
            </label>
            <label>Genre:
              <input className="form-input" type="text" onChange={this.update('genreValue')}></input>
            </label>
            <label>Release Year:
              <input className="form-input" type="number" onChange={this.update('yearValue')} value={this.state.yearValue}/>
            </label>
            <label>Album Artwork:
              <input className="album-input-art" type="file" onChange={this.handleImageChange}/>
            </label>
            <input className="submit-input" type="submit" value="Submit"></input>
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
