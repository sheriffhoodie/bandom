import React from 'react';
import {Link} from 'react-router-dom';

const AlbumSearchResultItem = ({album, clearSearch, fetchAlbum}) => (
  <Link to={`/albums/${album.id}`} className="result-link">
    <div
      onClick={(e) => {
        fetchAlbum(album.id);
        clearSearch();
      }}
      className="search-result-item">
      <img src={album.artwork} className="album-result-pic"/>
        <p className="link-title">{album.title}
        </p>
    </div>
  </Link>
);

export default AlbumSearchResultItem;
