import React from 'react';
import {Link} from 'react-router-dom';

const AlbumSearchResultItem = ({album, clearSearch, fetchAlbum}) => (
  <div
    onClick={(e) => {
      fetchAlbum(album.id);
      clearSearch();
    }}
    className="search-result-item">
    <img src={album.artwork} className="result-pic"/>
    <Link to={`/albums/${album.id}`}
      className="result-link" >{album.title}</Link>
  </div>
);

export default AlbumSearchResultItem;
