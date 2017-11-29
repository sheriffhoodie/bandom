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
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.genreChange = this.genreChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    if (this.props.fetchAlbum) {
      this.props.fetchAlbum(this.props.album.id);
    }
  }

  titleChange(event) {
    this.setState({titleValue: event.target.value});
  }

  descriptionChange(event) {
    this.setState({descriptionValue: event.target.value});
  }

  yearChange(event) {
    this.setState({yearValue: event.target.value});
  }

  genreChange(event) {
    this.setState({genreValue: event.target.value});
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
    this.props.createAlbum(album);
  }

  render() {
    return (
      <div className="form-main">

      <div className="create-form">
        <h2 className="form-title">Create Album</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Title:
            <input className="form-input" type="text" onChange={this.titleChange} value={this.state.titleValue}/>
          </label>
          <label>Description:
            <textarea value={this.state.descriptionValue} onChange={this.descriptionChange}></textarea>
          </label>
          <label>Genre:
            <input className="form-input" type="text" onChange={this.genreChange}></input>
          </label>
          <label>Release Year:
            <input className="form-input" type="number" onChange={this.yearChange} value={this.state.yearValue}/>
          </label>
          <label>Album Artwork:
            <input className="album-input-art" type="file" onChange={this.updateFile}/>
          </label>
          <input className="submit-input" type="submit" value="Submit"></input>
        </form>
      </div>

      <footer className="ashow-footer">
        <p className="footer-text">
          Follow me on <a href="http://github.com/sheriffhoodie">GitHub</a> and <a href="https://www.linkedin.com/in/maxwell-currier-a7769263/">Linkedin!</a>
        </p>
      </footer>
    </div>
    );
  }
}

export default AlbumForm;
