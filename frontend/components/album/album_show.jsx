import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render() {
    return (
      'how'
    );
  }
}

export default AlbumShow;
