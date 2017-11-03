import React from 'react';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: props.album.title,
      artistValue: props.album.artistName,
      descriptionValue: props.album.description,
      yearValue: props.album.year,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.artistChange = this.artistChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
  }

  componentDidMount() {
    if (this.props.fetchAlbum) {
      this.props.fetchAlbum(this.props.album.id);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.fetchAlbum) {
      return this.props.action({
        title: this.state.titleValue,
        description: this.state.descriptionValue,
        year: this.state.yearValue,
        id: this.props.album.id
      });
    } else {
      return this.props.action({
        title: this.state.titleValue,
        description: this.state.descriptionValue
      });
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

  artistChange(event) {
    this.setState({artistValue: event.target.value});
  }

  render() {
    return (
      <div className="form-main">

      <div className="create-form">
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" onChange={this.titleChange} value={this.state.titleValue}/>
          </label>
          <label>Artist Name
            <input type="text" onChange={this.artistChange} value={this.state.artistValue}/>
          </label>
          <label>Description
            <textarea value={this.state.descriptionValue} onChange={this.descriptionChange}></textarea>
          </label>
          <label>Release Year
            <input type="number" onChange={this.yearChange} value={this.state.yearValue}/>
          </label>
          <button value="Submit"></button>
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
