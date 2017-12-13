export const searchAlbums = (albums, searchText) => {
  return (
    albums.filter((album) => {
      return album.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    })
  );
};

export const searchArtists = (artists, searchText) => {
  return (
    artists.filter((artist) => {
      return artist.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    })
  );
};
