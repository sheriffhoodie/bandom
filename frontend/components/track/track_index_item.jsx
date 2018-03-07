import React from 'react';
import TrackIndexContainer from './track_index_container';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.checkforPlayback();
  }

  checkforPlayback() {
    document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for (let i = 0; i < audios.length; i++) {
        if(audios[i] !== e.target){
            audios[i].pause();
        }
      }
    }, true);
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
          	<source src={track.audio} type="audio/mp3"/>
          </audio><br />
        </div>
      </div>
    );
  }
}

export default TrackIndexItem;
