import React from 'react';
import {Link} from 'react-router-dom';

const ArtistSearchResultItem = ({artist, clearSearch, fetchArtist}) => (
  <div
    onClick={(e) => {
      fetchArtist(artist.id);
      clearSearch();
    }}
    className="search-result-item">
    <img src={artist.image_url} className="artist-result-pic"/>
      <Link to={`/users/${artist.id}`}
        className="result-link">{artist}</Link>
  </div>
);

export default ArtistSearchResultItem;
