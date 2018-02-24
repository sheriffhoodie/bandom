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

export const updateArtist = (data, id) => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${id}`,
    processData: false,
    contentType: false,
    data: data
  });
};

export const fetchFeaturedArtists = () => {
  return $.ajax({
    method: 'get',
    url: '/api/users/featured'
  });
};
