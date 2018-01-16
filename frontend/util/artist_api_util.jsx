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

export const updateArtist = data => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${data.id}`,
    processData: false,
    contentType: false,
    data: data
  });
};
