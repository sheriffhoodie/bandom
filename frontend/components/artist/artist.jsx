import React from 'react';

class Artist extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId)
  }

  render() {
    return (

    )
  }
}

export default Artist;
