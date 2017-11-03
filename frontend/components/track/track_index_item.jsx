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
      <div>
        <p>{track.ord}. {track.title}</p>
      </div>
      <div>
        <audio controls preload="metadata">
        	<source src={"https://s3.us-east-2.amazonaws.com/bandom-dev/my-audio/Desiigner+-+Panda+(Remix+Cover).mp3"} type="audio/mp3"/>
        </audio><br />
      </div>
    </div>
    );
  }
}

export default TrackIndexItem;
