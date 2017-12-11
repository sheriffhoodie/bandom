import React from 'react';
import {Link} from 'react-router-dom';

const SearchResultItem = ({album, clearSearch, fetchAlbum}) => (
  <div
    onClick={(e) => {
      fetchAlbum(album.id);
      clearSearch();
    }}
    className="search-result-item">
    <Link to={`/albums/${album.id}`}
      className="link-to-album" >{album.title}</Link>
  </div>
);

export default SearchResultItem;
