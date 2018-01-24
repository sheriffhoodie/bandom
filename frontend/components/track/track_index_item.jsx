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
        <div className="single-track-div">
          <p className="track-info-description">{track.ord}. {track.title}</p>
        </div>
        <div>
          <audio controls preload="metadata">
          	<source src={`#{asset_path(this.props.track.audio_file)}`} type="audio/mp3"/>
          </audio><br />
        </div>
      </div>
    );
  }
}

export default TrackIndexItem;
