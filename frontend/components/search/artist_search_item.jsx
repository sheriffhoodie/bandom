import React from 'react';
import {Link} from 'react-router-dom';

const ArtistSearchResultItem = ({artist, clearSearch, fetchArtist}) => (
  <Link to={`/users/${artist.artist.id}`} className="result-link">
    <div
      onClick={(e) => {
        fetchArtist(artist.artist.id);
        clearSearch();
      }}
      className="search-result-item">
      <img src={artist.artist.pic} className="trk-art-result-pic"/>
          <p className="link-title">{artist.artist.name}
          </p>
    </div>
  </Link>
);

export default ArtistSearchResultItem;
