import React from 'react';
import SearchResultItem from './search_result_item';
import {searchAlbums} from '../../util/search_api_util';

class Search extends React.Component {
  constructor(props) {

  }

  render() {
    return (
      <div className="search-bar">
        <input type="text"
          className="search-input"
          placeholder="Search for artist, track or album"/>
        <span className="search-icon"></span>
      </div>
    );
  }
}
