import React from 'react';
import {Link} from 'react-router-dom';

const TrackSearchResultItem = ({track, clearSearch, fetchAlbum}) => (
  <Link to={`/albums/${track.track.albumId}`} className="result-link">
    <div
      onClick={(e) => {
        fetchAlbum(track.track.albumId);
        clearSearch();
      }}
      className="search-result-item">
      <img src={track.track.pic} className="result-pic"/>
        <p className="link-title">{track.track.title}
        </p>
    </div>
  </Link>
);

export default TrackSearchResultItem;
