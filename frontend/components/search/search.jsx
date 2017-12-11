import React from 'react';
import SearchResultItem from './search_result_item';
import {searchAlbums} from '../../util/search_api_util';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: "", searchResults: []};
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
    let searchResults;
    if (this.state.searchText === "") {
      searchResults = [];
    } else {
      searchResults = searchAlbums(this.props.albums, this.state.searchText)
      .map((album, idx) => {
        return <SearchResultItem clearSearch={this.clearSearch}
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
          placeholder="Search for album"/>
        <ul className="search-results">
          {searchResults}
        </ul>
        <span className="search-icon"></span>
      </div>
    );
  }
}

export default Search;
