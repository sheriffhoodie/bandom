import React from 'react';
import TrackIndexContainer from './track_index_container';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const track = this.props.track;
    return (
      <div>
        <p>{track.ord}. {track.title}</p>
      </div>
    );
  }
}

export default TrackIndexItem;
