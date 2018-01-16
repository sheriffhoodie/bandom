export const fetchArtists = () => {
  return $.ajax({
    method: 'get',
    url: 'api/users'
  });
};

export const fetchArtist = artistId => {
  return $.ajax({
    method: 'get',
    url: `api/users/${artistId}`
  });
};

export const updateArtist = artist => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${artist.id}`,
    data: {artist}
  });
};
