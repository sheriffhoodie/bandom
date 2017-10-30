export const fetchAlbums = data => {
  return $.ajax({
    method: 'get',
    url: 'api/albums',
    data
  });
};

export const fetchAlbum = id => {
  return $.ajax({
    method: 'post',
    url: `api/albums/${id}`
  });
};

export const createAlbum = album => {
  return $.ajax({
    method: 'post',
    url: 'api/albums',
    data: {album}
  });
};

export const updateAlbum = album => {
  return $.ajax({
    method: 'patch',
    url: `api/albums/${album.id}`,
    data: {album}
  });
};

export const deleteAlbum = id => {
  return $.ajax({
    method: 'delete',
    url: `api/albums/${id}`
  });
};
