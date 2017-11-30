import React from 'react';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      artistId: this.props.currentUser.id,
      descriptionValue: "",
      yearValue: "",
      genreValue: "",
      fileUrl: null,
      artwork: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    if (this.props.fetchAlbum) {
      this.props.fetchAlbum(this.props.album.id);
    }
  }

  update(field) {
    return event => this.setState({
      [field]: event.target.value
    });
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ artwork: file, fileUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ artwork: null, fileUrl: ""});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const album = Object.assign({}, {title: this.state.titleValue,
      artistId: this.props.currentUser.id,
      genre: this.state.genreValue,
      year: parseInt(this.state.yearValue),
      description: this.state.descriptionValue,
      artwork: this.state.artwork
    });
    this.props.createAlbum(album).then((albumId) => (
     this.props.history.push(`/albums/${albumId}`)));
  }

  render() {
    return (
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
              <input className="album-input-art" type="file" onChange={this.updateFile}/>
            </label>
            <input className="submit-input" type="submit" value="Submit"></input>
          </form>
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
