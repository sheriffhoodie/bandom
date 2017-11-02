export const fetchTracks = (albumId) => {
  return $.ajax({
    method: 'get',
    url: `api/albums/${albumId}`
  });
};

export const createTrack = (track, albumId) => {
  return $.ajax({
    method: 'post',
    url: `api/albums/${albumId}`,
    data: {track},
    contentType: false,
    processData: false
  });
};
