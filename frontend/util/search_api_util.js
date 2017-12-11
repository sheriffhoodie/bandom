export const searchAlbums = (albums, searchText) => {
  return (
    albums.filter((album) => {
      return album.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    })
  );
};
