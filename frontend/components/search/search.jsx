import React from 'react';
import AlbumSearchResultItem from './album_search_item';
import ArtistSearchResultItem from './artist_search_item';
import {searchAlbums, searchArtists} from '../../util/search_api_util';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: "", AlbumSearchResults: [], ArtistSearchResults: []};
    this.handleInput = this.handleInput.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  clearSearch() {
    this.setState({searchText: ""});
  }

  handleInput(e) {
    this.setState({searchText: e.target.value});
  }

  render() {
    let ArtistSearchResults;
    let AlbumSearchResults;
    if (this.state.searchText === "") {
      ArtistSearchResults = [];
      AlbumSearchResults = [];
    } else {
      ArtistSearchResults =
      searchArtists(this.props.artists, this.state.searchText)
        .map((artist, idx) => {
        return <ArtistSearchResultItem clearSearch={this.clearSearch}
          artist={artist} key={idx} fetchArtist={this.props.fetchArtist}/>;
      }
    );
    AlbumSearchResults =
    searchAlbums(this.props.albums, this.state.searchText)
    .map((album, idx) => {
      return <AlbumSearchResultItem clearSearch={this.clearSearch}
        album={album} key={idx} fetchAlbum={this.props.fetchAlbum}/>;
    }
  );
    }
    return (
      <div className="search-bar">
        <input type="text"
          className="search-input"
          onChange={this.handleInput}
          value={this.state.searchText}
          placeholder="Search for album or artist"/>
        <ul className="search-results">
          {ArtistSearchResults}
          {AlbumSearchResults}
        </ul>
        <span className="search-icon"></span>
      </div>
    );
  }
}

export default Search;
